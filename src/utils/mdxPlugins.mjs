import smartypants from "@ngsctt/remark-smartypants"
import { h } from "hastscript"
import prism from "mdx-prism"
import katex from "rehype-katex"
import directive from "remark-directive"
import gfm from "remark-gfm"
import math from "remark-math"
import toc from "remark-toc"
import { visit } from "unist-util-visit"

// This plugin is an example to let users write HTML with directives.
// It’s informative but rather useless.
// See below for others examples.
/** @type {import('unified').Plugin<[], import('mdast').Root>} */
function htmlDirectives() {
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
  gfm,
  smartypants,
  math,
  toc,
  directive,
  htmlDirectives,
]
export const rehypePlugins = [katex, prism]
