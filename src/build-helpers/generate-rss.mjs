import { createElement } from "react"
import { createRequire } from "module"
import { readFileSync, writeFileSync } from "fs"
import { resolve, join } from "path"
import abbr from "remark-abbr"
import math from "remark-math"
import matter from "gray-matter"
import MDX from "@mdx-js/runtime"
import read from "fs-readdir-recursive"
import RSS from "rss"
import server from "react-dom/server.js"
import smartypants from "@ngsctt/remark-smartypants"
import toc from "remark-toc"

const { renderToString } = server

const require = createRequire(import.meta.url)
// eslint-disable-next-line @typescript-eslint/no-var-requires
const siteConfig = require("../data/siteconfig.json")

const emptyFunction = () => null

const Image = ({ alt, src, width, height }) => {
  const isRemote = src.startsWith("http")
  return createElement(
    "img",
    {
      alt,
      src: isRemote ? src : `https://daneden.me/uploads/${src}`,
      width,
      height,
    },
    null
  )
}

const Link = ({ href, children }) => {
  return createElement(
    "a",
    { href: `${href.startsWith("/") ? "https://daneden.me" : ""} ${href}` },
    children
  )
}

const POSTS_PATH = join(process.cwd(), "blog")
const postPaths = read(POSTS_PATH)

const feed = new RSS({
  title: siteConfig.title,
  description: siteConfig.description,
  feed_url: "https://daneden.me/feed.xml", // eslint-disable-line camelcase
  site_url: "https://daneden.me/", // eslint-disable-line camelcase
})

const postsMap = new Map(
  postPaths
    .map((filePath) => {
      const fullPath = join(POSTS_PATH, filePath)
      const source = readFileSync(fullPath)
      const slug = fullPath.replace(/^.*\/blog\//, "").replace(".mdx", "")

      const { content, data } = matter(source)
      return {
        content,
        frontMatter: {
          ...data,
          slug,
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

const posts = []

postsMap.forEach(async function compilePost(post, path) {
  const { content } = post

  // Provide some mock components and empty functions for the interactive elements
  const components = {
    Image,
    a: Link,
    Video: emptyFunction,
    TypedSystemsButton: emptyFunction,
    Codepen: emptyFunction,
    RedesignGallery: emptyFunction,
  }

  const compiledContent = renderToString(
    createElement(
      MDX,
      {
        components,
        remarkPlugins: [abbr, smartypants, math, toc],
      },
      content
    )
  )

  posts.push({ ...post.frontMatter, path, content: compiledContent })
})

posts.map((post) => {
  feed.item({
    title: post.title,
    url: `https://daneden.me/blog/${post.path}`,
    guid: post.path,
    categories: post.categories,
    date: post.date,
    description: post.content,
  })
})

const xmlString = feed.xml()
const filePath = resolve(process.cwd(), "public", "feed.xml")

writeFileSync(filePath, xmlString)
