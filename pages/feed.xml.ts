import { getPosts } from "@/utils/mdx/sources"
import { Feed } from "feed"
import { GetServerSidePropsContext } from "next"

const { VERCEL_URL } = process.env

async function generateRSSFeed() {
  const posts = await getPosts()
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
    feed.addItem({
      title: post!.frontMatter.title,
      link: `https://${VERCEL_URL}/blog/${post!.slug}`,
      id: post!.slug,
      description: post!.frontMatter.excerpt,
      date: new Date(post!.frontMatter.date),
      author: [author],
      contributor: [author],
    })
  })

  return feed
}

function RSSFeed() {}

export async function getServerSideProps({ res }: GetServerSidePropsContext) {
  const feed = await generateRSSFeed()

  res.setHeader("Content-Type", "text/xml")
  res.write(feed.rss2())
  res.end()

  return {
    props: {},
  }
}

export default RSSFeed
