import { Atoms } from "@/designSystem"
import widont from "@/utils/widont"
import { createCanvas, registerFont } from "canvas"
import siteConfig from "../data/siteconfig.json"

interface FontConfig {
  path: string
  config: {
    family: string
    weight?: string
    style?: string
  }
}

interface OGConfig {
  display: FontConfig
  author: FontConfig
}

// This function takes a canvas, string, and maxwidth to determine
// how to split the subject string based on its rendered length,
// allowing text to wrap in the canvas
function getLines(
  ctx: CanvasRenderingContext2D,
  text: string,
  maxWidth: number
): string[] {
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

export default function ogImage(title: string, fonts: OGConfig): Buffer | null {
  // If there's no title, exit early
  if (!title) {
    return null
  }

  // Register fonts that are passed in. This needs to be done before the
  // canvas is created.
  Object.values(fonts).map(({ path, config }) => {
    registerFont(path, config)
  })

  const displaySize = 80
  const lineHeight = displaySize * 1
  const authorSize = 36
  const [width, height] = [1200, 1200]
  const [halfWidth, halfHeight] = [width / 2, height / 2]
  const textWidth = 1022
  const offset = 66

  const canvas = createCanvas(width, height)
  const ctx = canvas.getContext("2d")

  // Render the background colour
  ctx.fillStyle = Atoms.colors.text
  ctx.fillRect(0, 0, width, height)

  // Render the blog post title
  ctx.font = `bold ${displaySize}px ${fonts.display.config.family}`
  ctx.textAlign = "left"
  ctx.textBaseline = "middle"
  ctx.fillStyle = Atoms.colors.wash

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
    ctx.font = `${authorSize}px ${fonts.author.config.family}`
    ctx.fillStyle = Atoms.colors.meta

    ctx.translate(width - offset, halfHeight)
    ctx.rotate(-Math.PI / 2)
    ctx.textAlign = "center"
    ctx.fillText(siteConfig.title, 0, 0)
    ctx.resetTransform()
    ctx.restore()
  }

  return canvas.toBuffer("image/png")
}
