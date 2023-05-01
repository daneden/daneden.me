import { getPosts } from "@/app/get-posts"

export function GET() {
  const posts = getPosts()
  const max = 100 // max returned posts
  return new Response(
    `<?xml version="1.0" encoding="utf-8"?>
  <feed xmlns="http://www.w3.org/2005/Atom">
    <title>Daniel Eden</title>
    <subtitle>Blog</subtitle>
    <link href="https://daneden.me/feed" rel="self"/>
    <link href="https://daneden.me/"/>
    <updated>${posts[0].date}</updated>
    <id>https://daneden.me/</id>
    <author>
      <name>Daniel Eden</name>
      <email>dan.eden@me.com</email>
    </author>
    ${posts.slice(0, max).reduce((acc, post) => {
      const dateMatch = post.date.match(/\d{4}/)
      if (!dateMatch) return ""
      return `${acc}
        <entry>
          <id>${post.id}</id>
          <title>${post.title}</title>
          <link href="https://daneden.me/blog/${post.slug}"/>
          <updated>${post.date}</updated>
        </entry>`
    }, "")}
  </feed>`,
    {
      headers: {
        "Content-Type": "application/atom+xml; charset=utf-8",
      },
    }
  )
}
