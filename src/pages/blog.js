import React from "react"
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import PostLink from "../components/PostLink"
import Layout from "../components/Layout"

const QUERY = graphql`
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

const BlogPage = () => <StaticQuery
  query={QUERY}
  render={({
    data: {
      allMdx: { edges },
    },
    }) => <Layout>
      <Helmet title="Blog" />
      <div className="mxl">
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
    </Layout>
  }
/>

export default BlogPage
