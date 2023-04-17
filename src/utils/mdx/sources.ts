import { cache } from "react"
import * as z from "zod"
import { createSource } from "."
export const Post = createSource({
  contentPath: "blog",
  basePath: "/blog",
  sortBy: "date",
  sortOrder: "desc",
  frontMatter: z.object({
    title: z.string(),
    date: z.string(),
    excerpt: z.string().optional(),
  }),
})

export const getPosts = cache(async () => await Post.getAllMdxNodes())

export const getPost = cache(
  async (slug: string | string[]) => await Post.getMdxNode(slug)
)
