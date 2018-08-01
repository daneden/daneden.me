import React from "react"
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import PostLink from "../components/PostLink"
import Layout from "../components/Layout"

const BlogPage = (props) => <StaticQuery
  query={graphql`
    query BlogQuery {
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
  `}
  render={({ allMdx: { edges }, }) => (
    <Layout {...props}>
      <Helmet title="Blog" />
      <div className="mxl">
        <h1>Blog</h1>
        <ul className="unlist">
          {edges.map(edge => (
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
  )}
/>

export default BlogPage
