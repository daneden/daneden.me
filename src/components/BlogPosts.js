import React from "react"
import PostLink from "./PostLink"
import { graphql, StaticQuery } from "gatsby"

export default function BlogPosts() {
  return (
    <StaticQuery
      query={graphql`
        query {
          allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
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
      `}
      render={data => (
        <ul className="unlist">
          {data.allMdx.edges.map(edge => (
            <li className="ml" key={edge.node.fields.slug}>
              <PostLink post={edge.node} />
            </li>
          ))}
        </ul>
      )}
    />
  )
}
