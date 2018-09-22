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
              parent {
                ... on File {
                  name
                  sourceInstanceName
                }
              }
              frontmatter {
                title
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
            component: componentWithMDXScope(
              path.resolve("./src/components/Layout.js"),
              node.code.scope
            ),
          })
        })
      })
      .then(resolve)
  })
}

// exports.onCreateNode = ({ node, actions }) => {
//   if (node.internal.type === `Mdx`) {
//     const { createNodeField } = actions
//     const filename = path.basename(
//       node.fileAbsolutePath,
//       path.extname(node.fileAbsolutePath)
//     )
//
//     // get the date and title from the file name
//     const [, date, title] = filename.match(
//       /^([\d]{4}-[\d]{2}-[\d]{2})-{1}(.+)$/
//     )
//
//     // create a new slug concatenating everything
//     const slug = `/${slugify(date, "/")}/${title}/`
//
//     createNodeField({ node, name: `slug`, value: slug })
//   }
// }
