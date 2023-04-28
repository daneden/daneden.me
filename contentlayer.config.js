import { defineDocumentType, makeSource } from "contentlayer/source-files"
import { rehypePlugins, remarkPlugins } from "./src/utils/mdxPlugins.mjs"
export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true,
    },
    date: {
      type: "date",
      description: "The date of the post",
      required: true,
    },
    excerpt: {
      type: "string",
      description: "The excerpt of the post",
      required: false,
    },
    hidden: {
      type: "boolean",
      description: "Whether the post appears in the blog post list",
      required: false,
    },
    categories: {
      type: "list",
      of: { type: "string" },
      description: "The categories for this post",
      required: false,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/blog/${post._raw.flattenedPath}`,
    },
    slug: {
      type: "string",
      resolve: (post) => post._raw.flattenedPath,
    },
  },
}))

export default makeSource({
  contentDirPath: "blog",
  documentTypes: [Post],
  mdx: {
    rehypePlugins,
    remarkPlugins,
  },
})
