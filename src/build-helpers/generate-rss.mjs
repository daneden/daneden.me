import MDX from "@mdx-js/runtime"
import smartypants from "@ngsctt/remark-smartypants"
import { readFileSync, writeFileSync } from "fs"
import read from "fs-readdir-recursive"
import matter from "gray-matter"
import { createRequire } from "module"
import { join, resolve } from "path"
import { createElement } from "react"
import server from "react-dom/server.js"
import abbr from "remark-abbr"
import math from "remark-math"
import toc from "remark-toc"
import RSS from "rss"

const { renderToString } = server

const requireFile = createRequire(import.meta.url)
const siteConfig = requireFile("../data/siteconfig.json")

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

// Provide some mock components and empty functions for the interactive elements
const mockComponents = {
  Image,
  a: Link,
  Video: emptyFunction,
  TypedSystemsButton: emptyFunction,
  Codepen: emptyFunction,
  RedesignGallery: emptyFunction,
  SaturationDemo: emptyFunction,
  style: emptyFunction,
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

  const compiledContent = renderToString(
    createElement(
      MDX,
      {
        components: mockComponents,
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
