const EsmUrlPlugin = require("./webpack/EsmUrlPlugin.cjs");

module.exports = {
  reactStrictMode: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Needed for URL imports to hit EsmUrlPlugin,
    // if not set URL imports are considered externals.
    config.externalsPresets = {
      web: false
    }

    config.plugins.push(new EsmUrlPlugin());

    // Important: return the modified config
    return config;
  }
};
