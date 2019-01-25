const path = require("path")

const SITE_NAME = "Daniel Eden, Designer"

module.exports = {
  siteMetadata: {
    authorName: "Daniel Eden",
    title: SITE_NAME,
    description:
      "The personal site, blog, and portfolio of Daniel Eden, a designer who cares about the web and design systems",
  },
  polyfill: false,
  plugins: [
    "gatsby-plugin-emotion",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: SITE_NAME,
        short_name: `daneden.me`,
        start_url: `/`,
        background_color: `#fefefe`,
        theme_color: `#00c266`,
      },
    },
    "gatsby-plugin-offline",
    "gatsby-plugin-postcss",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        components: path.join(__dirname, "src/components"),
        designSystem: path.join(__dirname, "src/components/designSystem"),
        queries: path.join(__dirname, "src/queries"),
        utils: path.join(__dirname, "src/utils"),
      },
    },
    {
      resolve: "gatsby-mdx",
      options: {
        extensions: [".mdx", ".md"],
        defaultLayouts: {
          default: require.resolve("./src/components/Layout.js"),
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/blog/`,
        name: "blog",
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-122108242-1",
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: [],
      },
    },
  ],
}
