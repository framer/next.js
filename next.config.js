const EsmUrlPlugin = require("./webpack/EsmUrlPlugin.cjs");

module.exports = {
  reactStrictMode: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Needed for URL imports to hit EsmUrlPlugin,
    // if not set URL imports are considered externals.
    config.externalsPresets = {
      web: false
    }

    // Makes NextJS put framer assets to the right build folder.
    config.module.rules.push(
        {
          issuer: /^https:\/\/framerusercontent.com\/modules\//,
          test: /\.(png|jpg|jpeg|gif|webp|ico|bmp|svg)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'static/[hash][ext]',
          },
        })

    config.plugins.push(new EsmUrlPlugin());
    // Important: return the modified config
    return config;
  }
};
