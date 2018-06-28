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
  ],
}
