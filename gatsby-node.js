/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const fs = require("fs-extra")
const path = require("path")
const resolvePath = path.resolve
const slugify = require("slug")
const { createFilePath } = require(`gatsby-source-filesystem`)

const componentWithMDXScope = require("gatsby-mdx/component-with-mdx-scope")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMdx {
          edges {
            node {
              id
              parent {
                ... on File {
                  name
                  absolutePath
                }
              }
              code {
                scope
              }
            }
          }
        }
      }
    `)
      .then(result => {
        if (result.errors) {
          return reject(result.errors)
        }

        // Create blog post pages.
        result.data.allMdx.edges.forEach(({ node }) => {
          const filename = node.parent.name

          // get the date and title from the file name
          const [, date, title] = filename.match(
            /^([\d]{4}-[\d]{2}-[\d]{2})-{1}(.+)$/
          )

          // create a new slug concatenating everything
          const slug = `/${slugify(date, "/")}/${title}/`

          createPage({
            path: slug,
            component: node.parent.absolutePath,
          })
        })
      })
      .then(resolve)
  })
}
