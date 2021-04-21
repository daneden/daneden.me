const RSS = require("rss")
const fs = require("fs")
const read = require("fs-readdir-recursive")
const matter = require("gray-matter")
const path = require("path")
const siteConfig = require(path.resolve(
  process.cwd(),
  "src",
  "data",
  "siteconfig.json"
))

const POSTS_PATH = path.join(process.cwd(), "blog")
const postPaths = read(POSTS_PATH)

const feed = new RSS({
  title: siteConfig.title,
  description: siteConfig.description,
  feed_url: "https://daneden.me/feed.xml",
  site_url: "https://daneden.me/",
})

const postsMap = new Map(
  postPaths
    .map((filePath) => {
      const fullPath = path.join(POSTS_PATH, filePath)
      const source = fs.readFileSync(fullPath)

      const slug = fullPath.replace(/^.*\/blog\//, "").replace(".mdx", "")
      const ogSlug = slug.replace(/^\//, "").replace(/\//g, "-") + ".png"

      const { content, data } = matter(source)
      return {
        content,
        frontMatter: {
          ...data,
          slug,
          ogSlug,
        },
        path: fullPath,
      }
    })
    .map((entry) => {
      const {
        frontMatter: { slug },
      } = entry
      return [slug, entry]
    })
)

postsMap.forEach(function addRssItem(post, path) {
  feed.item({
    title: post.frontMatter.title,
    url: `https://daneden.me/blog/${path}`,
    guid: path,
    categories: post.frontMatter.categories,
    date: post.frontMatter.date,
  })
})

const xmlString = feed.xml()
const filePath = path.resolve(process.cwd(), "public", "feed.xml")

fs.writeFileSync(filePath, xmlString)
