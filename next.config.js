module.exports = {
  env: {
    VERCEL_URL: process.env.VERCEL_URL || "daneden.me",
  },
  i18n: {
    locales: ["en-GB"],
    defaultLocale: "en-GB",
  },
  images: {
    domains: ["dl.airtable.com"],
  },

  async redirects() {
    return [
      {
        source: "/animate",
        permanent: true,
        destination: "https://animate.style/",
      },
      {
        source: "/baseline",
        permanent: true,
        destination: "https://github.com/daneden/Baseline.js",
      },
      {
        source: "/books(.*)",
        permanent: true,
        destination: "/playlist$1",
      },
      {
        source: "/toast",
        permanent: true,
        destination: "https://daneden.github.io/Toast/",
      },
      {
        source: "/images/favicon.ico",
        permanent: true,
        destination: "/images/favicon.png",
      },
      {
        source: "/:year(\\d+)/:month(\\d+)?/:day(\\d+)?/:title(.*)",
        permanent: true,
        destination: "/blog/:year/:title",
      },
    ]
  },

  webpack(config, { isServer }) {
    if (!isServer) {
      config.node = {
        fs: "empty",
      }
    }

    config.module.rules = [
      ...config.module.rules,
      {
        test: /\.(ttf)$/i,
        loader: "file-loader",
      },
      {
        test: /\.(frag|vert|glsl)$/i,
        loader: "glsl-shader-loader",
      },
      {
        test: /\.mdx?$/,
        use: ["babel-loader", "@mdx-js/loader"],
      },
    ]

    return config
  },
}
