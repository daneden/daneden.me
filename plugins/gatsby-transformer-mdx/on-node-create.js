const crypto = require('crypto')
const slugify = require('slug')
const fetchFrontmatter = require('./fetch-frontmatter')
const { createFilePath } = require(`gatsby-source-filesystem`)

module.exports = async ({
  node, getNode, loadNodeContent, boundActionCreators
}) => {
  const { createNode, createParentChildLink } = boundActionCreators

  if (
    node.internal.mediaType !== `text/markdown` &&
    node.internal.mediaType !== `text/x-markdown`
  ) {
    return
  }

  const filename = createFilePath({ node, getNode, basePath: `pages` })

  // get the date and title from the file name
  const [, date, title] = filename.match(
    /^\/([\d]{4}-[\d]{2}-[\d]{2})-{1}(.+)\/$/
  )

  // create a new slug concatenating everything
  const slug = `/${slugify(
    date,
    "/"
  )}/${title}/`

  const content = await loadNodeContent(node)

  const mdxNode = {
    ...node,
    id: `${node.id} >>> Mdx`,
    children: [],
    parent: node.id,
    internal: {
      content,
      type: `Mdx`,
    },
  }

  const data = await fetchFrontmatter(content)

  mdxNode.frontmatter = {
    title: '',
    hidden: '',
    hero: '',
    className: '',
    ...data,
    slug,
    date,
  }

  mdxNode.internal.contentDigest = crypto
    .createHash(`md5`)
    .update(JSON.stringify(mdxNode))
    .digest(`hex`)

  createNode(mdxNode)
  createParentChildLink({ parent: node, child: mdxNode })
}
