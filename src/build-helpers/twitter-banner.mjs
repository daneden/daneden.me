import { render } from "@resvg/resvg-js"
import { execSync } from "child_process"
import { colord, extend } from "colord"
import lchPlugin from "colord/plugins/lch"
import "dotenv/config"
import { resolve as _resolve } from "path"
import Twitter from "twitter"

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

function ogImage() {
  const displaySize = 1024
  const [width, height] = [1500, 500]

  const svg = `<svg viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <style type="text/css">
    .title { fill: ${colord(fg).toHex()}; }
  </style>

  <text
    text-anchor="middle"
    font-family="Tiempos Headline"
    font-size="${displaySize}"
    x="${width / 2}"
    y="${height / 2}"
    class="title">
  ${commitSha}
  </text>
</svg>`

  const pngData = render(svg, {
    background: colord(bg).toHex(),
    font: {
      fontFiles: [tiemposHeadline], // Load custom fonts.
      loadSystemFonts: false, // It will be faster to disable loading system fonts.
    },
    logLevel: "off",
  })

  return pngData
}

const bannerData = ogImage().toString("base64")

const client = new Twitter({
  consumer_key: TWITTER_CONSUMER_KEY,
  consumer_secret: TWITTER_CONSUMER_SECRET,
  access_token_key: TWITTER_ACCESS_TOKEN,
  access_token_secret: TWITTER_ACCESS_TOKEN_SECRET,
})

const currentBranch = execSync("git branch --show-current").toString().trim()

if (currentBranch === "main" || currentBranch === "master") {
  client
    .post(`account/update_profile_banner.json`, {
      banner: bannerData,
    })
    .then((d) => console.log(d))
    .catch((e) => console.error(e))
} else {
  console.log(
    `Skipping twitter banner image update since the current branch is ${currentBranch} and not main`
  )
}
