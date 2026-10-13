import rss from "@astrojs/rss"
import { SITE_DESCRIPTION, SITE_TITLE } from "@/site"
import type { APIContext } from "astro"
import { getCollection } from "astro:content"

export async function GET(context: APIContext) {
  const posts = (await getCollection("posts", (post) => !post.data.hidden)).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  )

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site!,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `/blog/${post.id}`,
    })),
  })
}
