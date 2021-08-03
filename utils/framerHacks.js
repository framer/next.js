// Necessary for Framer library to work in Node
globalThis.navigator ??= { userAgent: "" }
globalThis.window ??= globalThis

window.Framer = require("framer")
window.React = require("react")
