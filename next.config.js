module.exports = {
  experimental: {
    urlImports: [
      "https://framer.com/m/",
      "https://framerusercontent.com/",
      "https://fonts.gstatic.com/",
      "https://ga.jspm.io/",
      "https://jspm.dev/",
    ],
  },
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
  presets: ["next/babel"],
  plugins: [
    [
      "styled-components",
      {
        ssr: true,
        displayName: true,
        preprocess: false,
      },
    ],
  ],
  reactStrictMode: true,
  swcMinify: true,
  async headers() {
    return [
      {
        // matching all API routes
        source: "/(.*)",
        headers: [
          { key: "Referrer-Policy", value: "origin" }
        ]
      }
    ]
  }
};
