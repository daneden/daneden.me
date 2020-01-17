/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const slugFromPath = require('./src/utils/slugFromPath')

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

          // create a new slug concatenating everything
          const slug = slugFromPath(filename)

          createPage({
            path: slug,
            component: node.parent.absolutePath,
          })
        })
      })
      .then(resolve)
  })
}
