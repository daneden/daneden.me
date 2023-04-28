import { allPosts } from "contentlayer/generated"
import { Feed } from "feed"

const { VERCEL_URL } = process.env

async function generateRSSFeed() {
  const posts = allPosts

  const author = {
    name: "Daniel Eden",
    email: "dan.eden@me.com",
    link: "https://twitter.com/_dte",
  }

  const feed = new Feed({
    title: "Daniel Eden, Designer",
    description: "",
    id: `https://${VERCEL_URL}`,
    link: `https://${VERCEL_URL}`,
    image: `https://${VERCEL_URL}/api/og`,
    favicon: `https://${VERCEL_URL}/images/face.jpeg`,
    copyright: `© ${new Date().getFullYear()} Daniel Eden`,
    updated: new Date(),
    generator: "Feed for Node.js",
    feedLinks: {
      rss2: `https://${VERCEL_URL}/feed.xml`,
    },
    author,
  })

  posts.forEach((post) => {
    if (post) {
      feed.addItem({
        title: post.title,
        link: `https://${VERCEL_URL}/${post.url}`,
        id: post.url,
        description: post.excerpt,
        date: new Date(post.date),
        author: [author],
        contributor: [author],
      })
    }
  })

  return feed
}

export async function GET() {
  const feed = await generateRSSFeed()
  return new Response(feed.rss2(), {
    headers: {
      "Content-Type": "text/xml",
    },
  })
}

export const runtime = "nodejs"
