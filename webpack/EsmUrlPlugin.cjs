"use strict"

const { URL } = require("url")
const webpack = require("webpack")

/** @typedef {webpack.Compiler} Compiler */

/** @typedef {{ url: string; data: Buffer }} CachedResponse */

/** @type {Record<string, Promise<CachedResponse>>} */
const cache = {}

/** @type {Record<string, string>} */
const redirectCache = {}

/**
 * @param url {string}
 * @returns {Promise<CachedResponse>}
 */
async function get(url) {
    if (cache[url]) {
        console.log("cache", url)
        return cache[url]
    }
    console.log("get", url)
    const promise = new Promise((resolve, reject) => {
        const { https } = require("follow-redirects")
        https.get(url, response => {
            if (response.statusCode !== 200) {
                reject(Error(`Request for ${url} failed with status code ${response.statusCode}`))
                return
            }
            if (!cache[response.responseUrl]) {
                // Requests for the final URL should result in the same response.
                cache[response.responseUrl] = promise
            }
            const chunks = []
            response.on("data", chunk => {
                chunks.push(chunk)
            })
            response.on("end", () => {
                if (!response.complete) {
                    reject(Error(`Request for ${url} failed to complete`))
                    return
                }
                // Store a simpler cache version for relative path resolution use only.
                redirectCache[url] = new URL(response.responseUrl)
                resolve({ url: response.responseUrl, data: Buffer.concat(chunks) })
            })
        })
    })
    cache[url] = promise
    return promise
}

class EsmUrlPlugin {
    /**
     * Apply the plugin
     * @param {Compiler} compiler the compiler instance
     * @returns {void}
     */
    apply(compiler) {
        compiler.hooks.compilation.tap(
            "EsmUrlPlugin",
            (compilation, { normalModuleFactory }) => {
                normalModuleFactory.hooks.resolveForScheme
                    .for("https")
                    .tapAsync(
                        "EsmUrlPlugin",
                        (resourceData, resolveContext, callback) => {
                            get(resourceData.resource)
                                .then(({ url: href }) => {
                                    const url = new URL(href)
                                    resourceData.path = url.origin + url.pathname
                                    resourceData.query = url.search
                                    resourceData.fragment = url.hash
                                    callback()
                                })
                                .catch(error => {
                                    callback(error)
                                })
                        }
                    )
                webpack.NormalModule.getCompilationHooks(compilation)
                    .readResourceForScheme.for("https")
                    .tapAsync("EsmUrlPlugin", (resource, module, callback) => {
                        get(resource)
                            .then(({data}) => {
                                callback(null, data)
                            })
                            .catch(error => {
                                callback(error)
                            })
                    })
            }
        )

        // Register our custom resolver for relative paths, URLs and bare module specifiers.
        compiler.resolverFactory.hooks.resolver
            .for("normal")
            .tap("EsmUrlPlugin", (resolver) => {
                // If we successfully resolve a URL we jump straight to the last step of the resolution pipeline:
                // https://github.com/webpack/enhanced-resolve/blob/60d79f3c93304ce5ecbbe0127aa583d4a73bf1a1/lib/ResolverFactory.js#L279
                const target = resolver.ensureHook("resolved")

                resolver.hooks.resolve.tapAsync(
                    "EsmUrlPlugin",
                    (request, resolveContext, callback) => {
                        let baseUrl = parseUrl(request.context.issuer)
                        // If the issuer module is not a URL module, skip.
                        if (!baseUrl) return callback()
                        // Use final URLs in case of redirects.
                        baseUrl = redirectCache[baseUrl.href] || baseUrl

                        if (needsRelativeResolution(request.request)) {
                            request.path = new URL(
                                request.request,
                                baseUrl
                            ).href

                            return resolver.doResolve(
                                target,
                                request,
                                null,
                                resolveContext,
                                callback
                            )
                        }

                        if (!parseUrl(request.request)) {
                            // We are dealing with a bare module specifier.
                            // Resolve it starting from the roots of the project.
                            request.path = require.resolve(request.request, {
                                paths: Array.from(resolver.options.roots),
                            })

                            return resolver.doResolve(
                                target,
                                request,
                                null,
                                resolveContext,
                                callback
                            )
                        }

                        return callback()
                    }
                )
            })
    }
}

module.exports = EsmUrlPlugin

function needsRelativeResolution(path) {
    // Relative paths, absolute paths and protocol-relative URLs need resolution against the issuer URL.
    return (
        path.startsWith(".") ||
        path.startsWith("/") ||
        path.startsWith("assets/")
    ) // FIXME: this is a Framer hack
}

function parseUrl(maybeURL) {
    try {
        return new URL(maybeURL)
    } catch (e) {
        return undefined
    }
}
