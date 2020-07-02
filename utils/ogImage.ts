import { Atoms } from "@/designSystem"
import Canvas from "canvas"
import widont from "./widont"

const { createCanvas, registerFont } = Canvas

const namesToTry = [
  "Söhne",
  "Söhne Breit",
  "Söhne Breit Fett",
  "Soehne",
  "Soehne Breit",
  "Soehne Breit Fett",
  "SöhneBreit",
  "SöhneBreit-Fett",
  "SoehneBreit",
  "SoehneBreit-Fett",
  "Sohne",
  "Sohne Breit",
  "Sohne Breit Fett",
  "SohneBreit",
  "SohneBreit-Fett",
  "S\u00F6hne",
  "S\u00F6hne Breit",
  "S\u00F6hne Breit Fett",
  "S\u00F6hneBreit",
  "S\u00F6hneBreit-Fett",
]

const fontNames = {
  soehne: namesToTry[19],
  national: "National 2",
}

registerFont("./utils/ogFonts/National2App-Regular.ttf", {
  family: fontNames.national,
})

registerFont("./utils/ogFonts/SoehneBreitApp-Fett.ttf", {
  family: fontNames.soehne,
  weight: "bold",
  style: "italic",
})

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
export default function ogImage(title: string): Buffer | null {
  if (!title) {
    return null
  }

  const displaySize = 80
  const [width, height] = [1200, 1200]
  const [halfWidth, halfHeight] = [width / 2, height / 2]
  const textWidth = 1024
  const offset = 66

  const canvas = createCanvas(width, height)
  const ctx = canvas.getContext("2d")

  ctx.fillStyle = Atoms.colors.text
  ctx.fillRect(0, 0, width, height)

  ctx.font = `bold ${displaySize}px ${fontNames.soehne}`
  ctx.textAlign = "left"
  ctx.textBaseline = "middle"
  ctx.fillStyle = Atoms.colors.wash

  const lines = getLines(ctx, widont(String(title)), textWidth)
  const textHeight = lines.length * displaySize

  ctx.fillText(lines.join("\n"), offset, halfHeight - textHeight / 2)

  const buffer = canvas.toBuffer("image/png")

  return buffer
}
