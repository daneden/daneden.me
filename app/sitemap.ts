import { allPosts } from "contentlayer/generated"
import { MetadataRoute } from "next"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogPosts = allPosts.map((post) => {
    return {
      url: `https://daneden.me/${post.url}`,
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
