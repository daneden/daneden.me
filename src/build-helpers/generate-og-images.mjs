/* eslint-disable @typescript-eslint/no-var-requires */
import { render } from "@resvg/resvg-js"
import fs, { promises as _promises, readFileSync } from "fs"
import read from "fs-readdir-recursive"
import matter from "gray-matter"
import { createRequire } from "module"
import { join, resolve as _resolve } from "path"

const require = createRequire(import.meta.url)
const siteConfig = require("../data/siteconfig.json")

const { mkdir, writeFile } = _promises
const { existsSync } = fs

const POSTS_PATH = join(process.cwd(), "blog")
const postPaths = read(POSTS_PATH)

const postsMap = new Map(
  postPaths
    .map((filePath) => {
      const fullPath = join(POSTS_PATH, filePath)
      const source = readFileSync(fullPath)

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

async function main() {
  await generateOgImages(
    Array.from(postsMap.values()).map((post) => post.frontMatter)
  ).catch((e) => {
    throw new Error(e)
  })
}

const tiemposHeadline = _resolve(
  process.cwd(),
  "src",
  "fonts",
  "ogFonts",
  "TiemposHeadline-Light.otf"
)

const soehne = _resolve(
  process.cwd(),
  "src",
  "fonts",
  "ogFonts",
  "Soehne-Buch.otf"
)

function widont(subject) {
  const words = subject.split(" ")
  const lastTwo = words.slice(-2).join(" ")

  if (lastTwo.length >= 15) {
    return subject
  } else {
    return subject.replace(/ ([^ ]*)$/, "\u00A0$1")
  }
}

// This function takes a canvas, string, and maxwidth to determine
// how to split the subject string based on its rendered length,
// allowing text to wrap in the canvas
function getLines(text, maxWidth) {
  // TODO: Add non-space punctuation to getLines for splitting
  // Currently splitting just happens on spaces, but should probably
  // also apply to e.g. hyphens
  const words = text.split(" ")
  const lines = []
  let currentLine = words[0]

  for (let i = 1; i < words.length; i++) {
    const word = words[i]
    const width = (currentLine + " " + word).length
    if (width < maxWidth) {
      currentLine += " " + word
    } else {
      lines.push(currentLine)
      currentLine = word
    }
  }
  lines.push(currentLine)
  return lines
}

function ogImage(title) {
  const displaySize = 80
  const authorSize = 36
  const [width, height] = [1200, 1200]
  const halfHeight = height / 2
  const offset = 66
  const lineHeight = displaySize * 1.15

  const lines = getLines(widont(title), 25)
  const verticalOffset = lines.length * lineHeight

  const svg = `<svg viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <style type="text/css">
    .title { fill: #f5f5f5; }
    .author { fill: rgba(128, 128, 128, 0.75); }
  </style>

  <text dominant-baseline="middle" font-family="Tiempos Headline" font-size="${displaySize}" x="${offset}" class="title">
  ${lines
    .map(
      (line, i) =>
        `<tspan x="${offset}"  dy="${
          halfHeight + offset - verticalOffset / 2
        }" y="${i * lineHeight}">${line}</tspan>`
    )
    .join("")}
  </text>

  <text text-anchor="middle" transform="translate(${
    width - offset
  }, ${halfHeight}) rotate(90)" font-family="Söhne" font-size="${authorSize}" class="author">${
    siteConfig.title
  }</text>
</svg>`

  const pngData = render(svg, {
    background: "#111",
    font: {
      fontFiles: [tiemposHeadline, soehne], // Load custom fonts.
      loadSystemFonts: false, // It will be faster to disable loading system fonts.
    },
    logLevel: "debug",
  })

  return pngData
}

const generateOgImages = async (posts) => {
  const dir = _resolve("public", "og")

  if (!existsSync(dir)) {
    await mkdir(dir).catch((e) => console.error(e))
  }

  const promises = posts.map(({ title, ogSlug }) => {
    return new Promise((resolve) => {
      const filepath = _resolve(
        dir,
        `${ogSlug ? ogSlug.split(".png")[0] : ""}.png`
      )

      const buffer = ogImage(title)
      writeFile(filepath, buffer)

      resolve(filepath)
    })
  })

  await Promise.all(promises).catch((error) => console.error(error))
}

main()
