import { client } from "@/utils/graphql-client"
import { gql } from "graphql-request"
import { MetadataRoute } from "next"
import { cache } from "react"

export const runtime = "edge"

const allPosts = cache(async function allPosts() {
  return await client.request<{ posts: Post[] }>(gql`
    query {
      posts(first: 100) {
        slug
        title
        excerpt
        date
      }
    }
  `)
})

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { posts } = await allPosts()
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
