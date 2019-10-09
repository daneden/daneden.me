const path = require("path")
const md5File = require("md5-file")

const slugFromPath = require("./src/utils/slugFromPath")

const fontFileHash = md5File.sync("./static/fonts/fonts.css")

const SITE_NAME = "Daniel Eden, Designer"

module.exports = {
  siteMetadata: {
    authorName: "Daniel Eden",
    title: SITE_NAME,
    description:
      "The personal site, blog, and portfolio of Daniel Eden, a designer who cares about the web and design systems",
    siteUrl: "https://daneden.me",
  },
  polyfill: false,
  plugins: [
    {
      resolve: "@bundle-analyzer/gatsby-plugin",
      options: { token: "6b65f3dd607754ad7bf8b1ff985957acc9cb11a9" },
    },
    "gatsby-plugin-emotion",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-typescript",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".mdx", ".md"],
        defaultLayouts: {
          default: require.resolve("./src/components/Layout.js"),
        },
        gatsbyRemarkPlugins: [
          { resolve: `gatsby-remark-widows` },
          { resolve: `gatsby-remark-smartypants` },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
            },
          },
        ],
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
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
        {
          site {
            siteMetadata {
              title
              description
              siteUrl
              site_url: siteUrl
            }
          }
        }
      `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map(edge => {
                const filename = edge.node.parent.name

                // create a new slug concatenating everything
                const slug = slugFromPath(filename)

                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + slug,
                  guid: site.siteMetadata.siteUrl + slug,
                  custom_elements: [{ "content:encoded": edge.node.html }],
                })
              })
            },
            query: `
            {
              allMdx(
                limit: 1000,
                sort: { order: DESC, fields: [frontmatter___date] }
              ) {
                edges {
                  node {
                    excerpt
                    html
                    frontmatter {
                      title
                      date
                    }
                    parent {
                      ... on File {
                        name
                      }
                    }
                  }
                }
              }
            }
          `,
            output: "/rss.xml",
            title: "daneden.me RSS Feed",
          },
        ],
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
          urls: [`/fonts/fonts.css?v=${fontFileHash}`],
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
    {
      resolve: "gatsby-plugin-offline",
      options: {
        dontCacheBustUrlsMatching: /(\.js$\/)/,
      },
    },
  ],
}
