const RSS = require("rss")
const fs = require("fs")
const read = require("fs-readdir-recursive")
const matter = require("gray-matter")
const path = require("path")
const renderToString = require("next-mdx-remote/render-to-string")
const katex = require("rehype-katex")
const slug = require("rehype-slug")
const abbr = require("remark-abbr")
const math = require("remark-math")
const toc = require("remark-toc")
const NextImage = require("next/image")
const prism = require("mdx-prism")
const smartypants = require("@ngsctt/remark-smartypants")
const React = require("react")

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

let promises = []
let posts = []

postsMap.forEach(async function addRssItem(post, path) {
  const { content, frontMatter } = post
  const components = {
    Image,
    a: Link,
    Video: emptyFunction,
    TypedSystemsButton: emptyFunction,
    Codepen: emptyFunction,
  }

  const mdxPromise = renderToString(content, {
    components,
    mdxOptions: {
      remarkPlugins: [abbr, smartypants, math, toc],
      rehypePlugins: [katex, prism, slug],
    },
  })

  promises.push(mdxPromise)
  posts.push({ ...post.frontMatter, path })
})

Promise.all(promises)
  .then((mdxSources) => {
    mdxSources.map((mdxSource, i) => {
      const post = posts[i]
      feed.item({
        title: post.title,
        url: `https://daneden.me/blog/${post.path}`,
        guid: post.path,
        categories: post.categories,
        date: post.date,
        description: mdxSource.renderedOutput,
      })
    })

    return
  })
  .then(() => {
    const xmlString = feed.xml()
    const filePath = path.resolve(process.cwd(), "public", "feed.xml")

    fs.writeFileSync(filePath, xmlString)
  })
