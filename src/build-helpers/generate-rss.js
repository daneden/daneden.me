/* eslint-disable @typescript-eslint/no-var-requires */
const RSS = require("rss")
const fs = require("fs")
const read = require("fs-readdir-recursive")
const matter = require("gray-matter")
const path = require("path")
const abbr = require("remark-abbr")
const math = require("remark-math")
const toc = require("remark-toc")
const smartypants = require("@ngsctt/remark-smartypants")
const React = require("react")
const { renderToString } = require("react-dom/server")
const MDX = require("@mdx-js/runtime")

const emptyFunction = () => null

const Image = ({ alt, src, width, height }) => {
  const isRemote = src.startsWith("http")
  return React.createElement(
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
  return React.createElement(
    "a",
    { href: `${href.startsWith("/") ? "https://daneden.me" : ""} ${href}` },
    children
  )
}

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
  feed_url: "https://daneden.me/feed.xml", // eslint-disable-line camelcase
  site_url: "https://daneden.me/", // eslint-disable-line camelcase
})

const postsMap = new Map(
  postPaths
    .map((filePath) => {
      const fullPath = path.join(POSTS_PATH, filePath)
      const source = fs.readFileSync(fullPath)
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
    RedesignGallery: emptyFunction
  }

  const compiledContent = renderToString(
    React.createElement(
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
const filePath = path.resolve(process.cwd(), "public", "feed.xml")

fs.writeFileSync(filePath, xmlString)
