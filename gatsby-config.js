module.exports = {
  siteMetadata: {
    authorName: 'Daniel Eden',
    title: 'Daniel Eden, Designer',
  },
  plugins: [
    'gatsby-plugin-react-next',
    'gatsby-plugin-mdx',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-mdx',
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
