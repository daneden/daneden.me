import { getPosts } from "@/utils/mdx/sources"
import { MetadataRoute } from "next"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogPosts = (await getPosts()).map((post) => {
    return {
      url: `https://daneden.me/blog/${post?.slug}`,
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
