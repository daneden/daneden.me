import { getPosts } from "@/app/get-posts"
import { MetadataRoute } from "next"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = getPosts()
  const blogPosts = posts.map((post) => {
    return {
      url: `https://daneden.me/blog/${post.slug}`,
      lastModified: new Date(),
    }
  })

  return [
    {
      url: "https://daneden.me",
      lastModified: new Date(),
    },
    {
      url: "https://daneden.me/portfolio",
      lastModified: new Date(),
    },
    {
      url: "https://daneden.me/playlist",
      lastModified: new Date(),
    },
    {
      url: "https://daneden.me/blog",
      lastModified: new Date(),
    },
    {
      url: "https://daneden.me",
      lastModified: new Date(),
    },
    ...blogPosts,
  ]
}
