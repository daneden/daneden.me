/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const fs = require('fs-extra')
const path = require('path')
const resolvePath = path.resolve
const slugify = require('slug')
const { createFilePath } = require(`gatsby-source-filesystem`)

// remark plugins
const footnotes = require('remark-numbered-footnotes')

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage, createLayout } = boundActionCreators

  return new Promise((resolve, reject) => {
    graphql(`
    {
      allMdx {
        edges {
          node {
            relativeDirectory
            absolutePath
            frontmatter {
              title
              slug
            }
          }
        }
      }
    }
    `).then(result => {
      if (result.errors) {
        return reject(result.errors)
      }

      // Create blog post pages.
      result.data.allMdx.edges.forEach(({ node }) => {
        const { absolutePath, frontmatter } = node
        const id = Math.random() + ''

        // createLayout({
        //   component: resolvePath('./src/templates/post.js'),
        //   id,
        //   context: { slug: frontmatter.slug }
        // })

        createPage({
          path: `${frontmatter.slug}`,
          layout: id,
          component: absolutePath
        })
      })
    })
    .then(resolve)
  })
}
