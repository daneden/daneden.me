import React from "react"
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import PostLink from "../components/PostLink"
import Layout from "../components/Layout"

class BlogPage extends React.Component {
  render() {
    const { data, location } = this.props
    return <Layout data={data} location={location}>
      <Helmet title="Blog" />
      <div className="mxl">
        <h1>Blog</h1>
        <ul className="unlist">
          {data.allMdx.edges.map(edge => (
          <li
            className="ml"
            key={edge.node.fields.slug}
          >
            <PostLink
              post={edge.node}
            />
          </li>
          ))}
        </ul>
      </div>
    </Layout>
  }
}

export default BlogPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        authorName
      }
    }
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
`
