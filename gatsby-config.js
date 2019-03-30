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
        gatsbyRemarkPlugins: [{ resolve: `gatsby-remark-widows` }],
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
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: [
            "Orelo Variable",
            "Unititled Sans Web",
            "Founders Grotesk Mono Web",
          ],
          urls: ["/fonts/fonts.css"],
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["UA-122108242-1"],

        gtagConfig: {
          optimize_id: "GTM-MNBLGN7",
          anonymize_ip: true,
          cookie_expires: 0,
        },

        pluginConfig: {
          head: false,
          respectDNT: true,
          exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: SITE_NAME,
        short_name: `daneden.me`,
        start_url: `/`,
        background_color: `#fefefe`,
        theme_color: `#fefefe`,
        icon: `static/images/icon.png`,
      },
    },
    "gatsby-plugin-remove-serviceworker",
  ],
}
