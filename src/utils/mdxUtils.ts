import { MDXPost } from "*.mdx"
import fs from "fs"
import read from "fs-readdir-recursive"
import matter from "gray-matter"
import path from "path"

interface MDXFile {
  data: MDXPost
  content: string
  path: string
}

const POSTS_PATH = path.join(process.cwd(), "blog")

const allPostsPaths: string[] = read(POSTS_PATH)
const allBlogPosts = allPostsPaths.map((filePath) => {
  const fullPath = path.join(POSTS_PATH, filePath)
  const source = fs.readFileSync(fullPath)

  const { content, data } = matter(source)
  return {
    content,
    data,
    path: fullPath,
  }
})

const allPosts = (allBlogPosts as MDXFile[])
  .map(({ data: frontmatter, path }) => {
    return {
      ...frontmatter,
      slug: path.replace(/^.*\/blog\//, "/blog/").replace(".mdx", ""),
    }
  })
  .filter((post) => !post.hidden)
  .map((post) => {
    return {
      ...post,
      // Adds a URL for the OG image
      ogSlug: post.slug?.replace(/^\//, "").replace(/\//g, "-") + ".png",
    }
  })
  .sort((a, b) => {
    return Number(new Date(b.date || "")) - Number(new Date(a.date || ""))
  })

export function postsForCategory(category: string): MDXPost[] {
  return allPosts.filter((post) => post.categories?.includes(category))
}

export const allCategories: string[] = allPosts
  .reduce<string[]>((categories, post) => {
    return post.categories ? [...categories, ...post.categories] : categories
  }, [])
  .filter((v, i, a) => a.indexOf(v) === i)

export default allPosts
