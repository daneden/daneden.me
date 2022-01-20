import canvas from "canvas"
import { execSync } from "child_process"
import { colord, extend } from "colord"
import lchPlugin from "colord/plugins/lch"
import "dotenv/config"
import { resolve as _resolve } from "path"
import Twitter from "twitter"

const { createCanvas, registerFont } = canvas

extend([lchPlugin])

const {
  TWITTER_ACCESS_TOKEN,
  TWITTER_ACCESS_TOKEN_SECRET,
  TWITTER_CONSUMER_KEY,
  TWITTER_CONSUMER_SECRET,
} = process.env

const tiemposHeadline = _resolve(
  process.cwd(),
  "src",
  "fonts",
  "ogFonts",
  "TiemposHeadline-Light.otf"
)

registerFont(tiemposHeadline, {
  family: "TiemposHeadline",
})

const commitSha = execSync("git rev-parse HEAD").toString().trim()
const indices = commitSha
  .slice(0, 6)
  .split("")
  .map((i) => parseInt(i, 16))
const hex = indices.map((i) => commitSha[i % (commitSha.length - 1)]).join("")
const bg = colord(`#${hex}`).toLch()

const fg = {
  ...bg,
  l: (bg.l + 50) % 100,
  h: (bg.h - 180) % 360,
}

function ogImage(callback) {
  const displaySize = 1024
  const [width, height] = [1500, 500]

  const canvas = createCanvas(width, height)
  const ctx = canvas.getContext("2d")

  // Render the background colour
  ctx.fillStyle = colord(bg).toHex()
  ctx.fillRect(0, 0, width, height)

  // Render the blog post title
  ctx.font = `light ${displaySize}px TiemposHeadline`
  ctx.textAlign = "center"
  ctx.textBaseline = "middle"
  ctx.fillStyle = colord(fg).toHex()

  ctx.fillText(commitSha, width / 2, height / 2)

  if (callback) {
    return canvas.toBuffer(callback)
  }

  return canvas.toBuffer("image/png")
}

const bannerData = ogImage().toString("base64")

const client = new Twitter({
  consumer_key: TWITTER_CONSUMER_KEY,
  consumer_secret: TWITTER_CONSUMER_SECRET,
  access_token_key: TWITTER_ACCESS_TOKEN,
  access_token_secret: TWITTER_ACCESS_TOKEN_SECRET,
})

client
  .post(`account/update_profile_banner.json`, {
    banner: bannerData,
  })
  .then((d) => console.log(d))
  .catch((e) => console.error(e))
