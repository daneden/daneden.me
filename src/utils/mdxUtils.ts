import { frontMatter as allBlogPosts, MDXPost } from "../../pages/blog/**/*.mdx"

const allPosts = (allBlogPosts as MDXPost[])
  .map((frontmatter) => {
    return {
      ...frontmatter,
      slug: (frontmatter.__resourcePath || "")
        .replace(/^blog\//, "/blog/")
        .replace(".mdx", ""),
    }
  })
  .filter((post) => !post.hidden)
  .map((post) => {
    return {
      ...post,
      ogSlug: post.slug?.replace(/^\//, "").replace(/\//g, "-") + ".png",
      date: new Date(post.date || ""),
    }
  })
  .sort((a, b) => {
    return Number(b.date) - Number(a.date)
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
