import { Atoms } from "@/designSystem"
import widont from "@/utils/widont"
import { createCanvas, registerFont } from "canvas"
import siteConfig from "../siteconfig.json"

function getLines(
  ctx: CanvasRenderingContext2D,
  text: string,
  maxWidth: number
): string[] {
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

export default function ogImage(title: string, fonts: OGConfig): Buffer | null {
  if (!title) {
    return null
  }

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

  lines.map((line, i) => {
    const y = halfHeight - textHeight / 2 + lineHeight * i + lineHeight / 3
    ctx.fillText(line, offset, y)
  })

  // Render the site name
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

  const buffer = canvas.toBuffer("image/png")

  return buffer
}
