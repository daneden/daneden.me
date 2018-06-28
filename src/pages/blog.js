import React from "react"
import PostLink from "../components/PostLink"

const BlogPage = ({
  data: {
    allMdx: { edges },
  },
}) => {
  const Posts = edges
    .map(edge => <PostLink
      key={edge.node.frontmatter.slug}
      post={edge.node}
    />)

  return <div>{Posts}</div>
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
            date
          }
        }
      }
    }
  }
`
