import { graphql } from 'gatsby'

const queries = {
  ALL_BLOG_POSTS: graphql`
      query {
        allMdx(sort: {fields: [frontmatter___date], order: DESC}) {
          edges {
            node {
              frontmatter {
                title
                date(formatString: "dddd, MMMM Do YYYY")
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `,
  SITE_METADATA: graphql`
    query {
      site {
        siteMetadata {
          authorName
          title
        }
      }
    }
  `
}

export default queries
