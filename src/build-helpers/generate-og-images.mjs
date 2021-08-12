/* eslint-disable @typescript-eslint/no-var-requires */
import canvas from "canvas"
import fs, { promises as _promises, readFileSync } from "fs"
import read from "fs-readdir-recursive"
import matter from "gray-matter"
import { createRequire } from "module"
import { join, resolve as _resolve } from "path"

const { createCanvas, registerFont } = canvas

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

const soehne = _resolve(process.cwd(), "src", "fonts", "ogFonts", "Soehne.ttf")
const national = _resolve(
  process.cwd(),
  "src",
  "fonts",
  "ogFonts",
  "National2App-Regular.ttf"
)

registerFont(soehne, {
  family: "Soehne",
})
registerFont(national, {
  family: "National 2",
})

// This function takes a canvas, string, and maxwidth to determine
// how to split the subject string based on its rendered length,
// allowing text to wrap in the canvas
function getLines(ctx, text, maxWidth) {
  // TODO: Add non-space punctuation to getLines for splitting
  // Currently splitting just happens on spaces, but should probably
  // also apply to e.g. hyphens
  const words = text.split(" ")
  const lines = []
  let currentLine = words[0]

  for (let i = 1; i < words.length; i++) {
    const word = words[i]
    const width = ctx.measureText(currentLine + " " + word).width
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

function ogImage(title, callback) {
  const displaySize = 80
  const lineHeight = displaySize * 1
  const authorSize = 36
  const [width, height] = [1200, 1200]
  const halfHeight = height / 2
  const textWidth = 1022
  const offset = 66

  const canvas = createCanvas(width, height)
  const ctx = canvas.getContext("2d")

  // Render the background colour
  ctx.fillStyle = "#111"
  ctx.fillRect(0, 0, width, height)

  // Render the blog post title
  ctx.font = `bold ${displaySize}px Soehne`
  ctx.textAlign = "left"
  ctx.textBaseline = "middle"
  ctx.fillStyle = "#f5f5f5"

  function widont(subject) {
    const words = subject.split(" ")
    const lastTwo = words.slice(-2).join(" ")

    if (lastTwo.length >= 15) {
      return subject
    } else {
      return subject.replace(/ ([^ ]*)$/, "\u00A0$1")
    }
  }

  const lines = getLines(ctx, widont(title), textWidth)
  const textHeight = lines.length * lineHeight

  // Mapping over the lines rather than .join("\n")-ing them allows us
  // to use a custom "line height"
  lines.map((line, i) => {
    const y = halfHeight - textHeight / 2 + lineHeight * i + lineHeight / 3
    ctx.fillText(line, offset, y)
  })

  // Render the site title, assuming the main text isn't equal to it
  if (title !== siteConfig.title) {
    ctx.font = `${authorSize}px National 2`
    ctx.fillStyle = "#44464B"

    ctx.translate(width - offset, halfHeight)
    ctx.rotate(-Math.PI / 2)
    ctx.textAlign = "center"
    ctx.fillText(siteConfig.title, 0, 0)
    ctx.resetTransform()
    ctx.restore()
  }

  if (callback) {
    return canvas.toBuffer(callback)
  }

  return canvas.toBuffer("image/png")
}

const generateOgImages = async (posts) => {
  const dir = _resolve("public", "og")

  if (!existsSync(dir)) {
    await mkdir(dir).catch((e) => console.error(e))
  }

  const promises = posts.map(({ title, ogSlug }) => {
    return new Promise((resolve, reject) => {
      const filepath = _resolve(
        dir,
        `${ogSlug ? ogSlug.split(".png")[0] : ""}.png`
      )

      ogImage(title, (error, buffer) => {
        if (error) {
          console.error(error)
          reject()
        }

        writeFile(filepath, buffer)
      })

      resolve(filepath)
    })
  })

  await Promise.all(promises).catch((error) => console.error(error))
}

main()
