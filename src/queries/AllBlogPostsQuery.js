import React from "react"
import { graphql, StaticQuery } from "gatsby"

const AllBlogPostsQuery = ({ render }) => (
  <StaticQuery
    query={graphql`
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
    `}
    render={data => render(data)}
  />
)

export default AllBlogPostsQuery
