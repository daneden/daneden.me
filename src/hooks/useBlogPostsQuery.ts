import { graphql, useStaticQuery } from "gatsby"
import { PostsQueryData } from "../interfaces/PostsQuery.interface"

const useBlogPostsQuery = () => {
  const { allMdx }: PostsQueryData = useStaticQuery(graphql`
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
