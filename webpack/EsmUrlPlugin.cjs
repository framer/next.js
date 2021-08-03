"use strict";

const { URL } = require("url");
const webpack = require("webpack");

/** @typedef {webpack.Compiler} Compiler */

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
                    .tapAsync("EsmUrlPlugin", (resourceData, resolveContext ,callback) => {
                        const url = new URL(resourceData.resource);

                        const { https } = require('follow-redirects');
                        https.get(url, { maxRedirects: 10 }, res => {
                            if (res.statusCode !== 200) {
                                res.destroy();
                                return callback(
                                    new Error(`https request status code = ${res.statusCode}`)
                                );
                            }

                            const finalUrl = new URL(res.responseUrl)
                            resourceData.path = finalUrl.origin + finalUrl.pathname;
                            resourceData.query = finalUrl.search;
                            resourceData.fragment = finalUrl.hash;

                            return callback();
                        })

                        // return /** @type {true} */ (true);
                    });
                webpack.NormalModule.getCompilationHooks(compilation)
                    .readResourceForScheme.for("https")
                    .tapAsync("EsmUrlPlugin", (resource, module, callback) => {
                        const { https } = require("follow-redirects");
                        return https.get(new URL(resource), { maxRedirects: 10 }, res => {
                            if (res.statusCode !== 200) {
                                res.destroy();
                                return callback(
                                    new Error(`https request status code = ${res.statusCode}`)
                                );
                            }

                            const bufferArr = [];

                            res.on("data", chunk => {
                                bufferArr.push(chunk);
                            });

                            res.on("end", () => {
                                if (!res.complete) {
                                    return callback(new Error("https request was terminated"));
                                }

                                callback(null, Buffer.concat(bufferArr));
                            });
                        });
                    });
            }
        );

        // Register our custom resolver for relative paths, URLs and bare module specifiers.
        compiler.resolverFactory.hooks.resolver
            .for('normal')
            .tap('EsmUrlPlugin', (resolver) => {
                // If we successfully resolve a URL we jump straight to the last step of the resolution pipeline:
                // https://github.com/webpack/enhanced-resolve/blob/60d79f3c93304ce5ecbbe0127aa583d4a73bf1a1/lib/ResolverFactory.js#L279
                const target = resolver.ensureHook("resolved");

                resolver.hooks.resolve.tapAsync('EsmUrlPlugin', (request, resolveContext, callback) => {
                    const baseUrl = parseUrl(request.context.issuer);

                    // If the issuer module is not a URL module, skip.
                    if (!baseUrl) return callback();

                    if (needsRelativeResolution(request.request)) {
                        request.path = new URL(request.request, baseUrl).href

                        return resolver.doResolve(target, request, null, resolveContext, callback);
                    }

                    if (!parseUrl(request.request)) {
                        // We are dealing with a bare module specifier.
                        // Resolve it starting from the roots of the project.
                        request.path = require.resolve(request.request, { paths: Array.from(resolver.options.roots) })

                        return resolver.doResolve(target, request, null, resolveContext, callback);
                    }

                    return callback();
                });
            })
    }
}

module.exports = EsmUrlPlugin;

function needsRelativeResolution(path) {
    // Relative paths, absolute paths and protocol-relative URLs need resolution against the issuer URL.
    return path.startsWith('.') || path.startsWith('/') || path.startsWith("assets/") // FIXME: this is a Framer hack
}

function parseUrl(maybeURL) {
    try {
        return new URL(maybeURL)
    } catch (e) {
        return undefined
    }
}