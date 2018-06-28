// const GraphQlJson = require(`graphql-type-json`)
// const fetchFrontmatter = require('./fetch-frontmatter')

// module.exports = ({ type }) => {
//   if (type.name !== `Mdx`) {
//     return {}
//   }

//   return {
//     frontmatter: {
//       type: GraphQlJson,
//       async resolve(node) {
//         const data = await fetchFrontmatter(node.internal.content)

//         return {
//           title: ``,
//           ...data
//         }
//       },
//     }
//   }
// }