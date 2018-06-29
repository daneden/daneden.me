import React from "react"
import PostLink from "../components/PostLink"

const BlogPage = ({
  data: {
    allMdx: { edges },
  },
}) => {
  return <div className="mxl">
    <h1>Blog</h1>
    <ul className="unlist">
      {edges.map(edge => (
      <li
        className="ml"
        key={edge.node.frontmatter.slug}
      >
        <PostLink
          post={edge.node}
        />
      </li>
      ))}
    </ul>
  </div>
}

export default BlogPage

export const pageQuery = graphql`
  query BlogQuery {
    allMdx(sort: {fields: [frontmatter___date], order: DESC}) {
      edges {
        node {
          frontmatter {
            title
            slug
            date(formatString: "dddd, MMMM Do YYYY")
          }
        }
      }
    }
  }
`
