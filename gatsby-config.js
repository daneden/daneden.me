const slugFromPath = require('./src/utils/slugFromPath')

const SITE_NAME = 'Daniel Eden, Designer'

module.exports = {
  siteMetadata: {
    authorName: 'Daniel Eden',
    title: SITE_NAME,
    description:
      'The personal site, blog, and portfolio of Daniel Eden, a designer who cares about the web and design systems',
    siteUrl: 'https://daneden.me',
  },
  polyfill: false,
  plugins: [
    'gatsby-plugin-eslint',
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        defaultLayouts: {
          default: require.resolve('./src/components/Layout.tsx'),
        },
        gatsbyRemarkPlugins: [
          { resolve: `gatsby-remark-widows` },
          { resolve: `gatsby-remark-smartypants` },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
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
        name: 'blog',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'fonts',
        path: `${__dirname}/src/fonts/`,
      },
    },
    {
      resolve: `gatsby-plugin-feed-mdx`,
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
                  custom_elements: [{ 'content:encoded': edge.node.html }],
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
            output: '/rss.xml',
            title: 'Daniel Eden’s Blog RSS Feed',
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ['UA-122108242-1'],

        gtagConfig: {
          optimize_id: 'GTM-MNBLGN7',
          anonymize_ip: true,
          cookie_expires: 0,
        },

        pluginConfig: {
          head: false,
          respectDNT: true,
          exclude: ['/preview/**', '/do-not-track/me/too/'],
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: SITE_NAME,
        short_name: `daneden.me`,
        start_url: `/`,
        background_color: `#f7f4ed`,
        theme_color: `#f7f4ed`,
        icon: `static/images/icon.png`,
      },
    },
    {
      resolve: 'gatsby-plugin-offline',
      options: {
        dontCacheBustUrlsMatching: /(\.js$\/)/,
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cache',
      options: {
        cachePublic: true,
      },
    },
  ],
}
