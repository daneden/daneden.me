import { graphql, useStaticQuery } from "gatsby"

const useBlogPostsQuery = () => {
  const { allMdx } = useStaticQuery(graphql`
    query {
      allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            parent {
              ... on File {
                name
              }
            }
            frontmatter {
              title
              date(formatString: "dddd, MMMM Do YYYY")
            }
          }
        }
      }
    }
  `)
  return { allMdx }
}

export default useBlogPostsQuery
