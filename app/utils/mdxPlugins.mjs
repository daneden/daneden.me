import { h } from "hastscript"
import { visit } from "unist-util-visit"

export function htmlDirectives() {
  return (tree) => {
    visit(tree, (node) => {
      if (
        node.type === "textDirective" ||
        node.type === "leafDirective" ||
        node.type === "containerDirective"
      ) {
        const data = node.data || (node.data = {})
        const hast = h(node.name, node.attributes)

        data.hName = hast.tagName
        data.hProperties = hast.properties
      }
    })
  }
}

export const remarkPlugins = [
  'remark-gfm',
  '@ngsctt/remark-smartypants',
  'remark-math',
  'remark-toc',
  'remark-directive',
]
export const rehypePlugins = ['rehype-katex', 'rehype-prism-plus']
