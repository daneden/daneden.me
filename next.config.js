// For building on vercel: https://github.com/Automattic/node-canvas/issues/1779
if (
  process.env.LD_LIBRARY_PATH == null ||
  !process.env.LD_LIBRARY_PATH.includes(
    `${process.env.PWD}/node_modules/canvas/build/Release:`
  )
) {
  process.env.LD_LIBRARY_PATH = `${
    process.env.PWD
  }/node_modules/canvas/build/Release:${process.env.LD_LIBRARY_PATH || ""}`
}

module.exports = {
  env: {
    VERCEL_URL: process.env.VERCEL_URL || "daneden.me",
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
      {
        source: "/rss.xml",
        permanent: true,
        destination: "/feed.xml",
      },
    ]
  },

  webpack(config) {
    config.module.rules = [
      ...config.module.rules,
      {
        test: /\.mdx?$/,
        use: ["babel-loader", "@mdx-js/loader"],
      },
    ]

    return config
  },
}
