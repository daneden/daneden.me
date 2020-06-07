import { NowRequest, NowResponse } from "@now/node"
import chrome from "chrome-aws-lambda"
import fs from "fs"
import path from "path"
import puppeteer from "puppeteer-core"
import { Atoms } from "@/designSystem"
import soehne from "../../public/fonts/soehne-breit-web-fett.woff2"
import national from "../../public/fonts/National2Web-Regular.woff2"

const injectFile = async (page, filePath) => {
  let contents = await new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) return reject(err)
      resolve(data)
    })
  })

  contents += `//# sourceURL=${filePath.replace(/\n/g, "")}`

  return page.mainFrame().evaluate(contents)
}

const generateHTML = (title = "Hello world") => {
  return `<html>
    <style>
      * {
        margin: 0;
        padding: 0;
      }

      html {
        width: 1200px;
        height: 1200px;
        background-color: ${Atoms.colors.text};
      }

      body {
        position: relative;
      }

      @font-face {
        font-family: 'Soenhe Breit Web';
        font-style: normal;
        font-weight: bold;
        src: url('https://${
          process.env.VERCEL_URL
        }/fonts/soehne-breit-web-fett.woff2') format('woff2');
      }

      @font-face {
        font-family: 'National 2';
        font-style: italic;
        src: url('https://${
          process.env.VERCEL_URL
        }/fonts/National2Web-Regular.woff2') format('woff2');
      }

      .title {
        font: 96px/1 "Soehne Breit Web", sans-serif;
        color: ${Atoms.colors.wash};
        max-width: 1024px;
      }

      .title p {
        position: absolute;
        top: 50%;
        left: 66px;
        transform: translateY(-55%);
        margin: 0;
      }

      .author {
        font: 36px/1 "National 2", sans-serif;
        color: ${Atoms.colors.whiteAlpha};
        transform: rotate(-90deg) translateY(300%);
        position: absolute;
        top: 50%;
        right: 0;
      }
    </style>

    <div class="title" style="position: relative; height: 100%; width: 100%;">
      <p>${title.replace(/ ([^ ]*)$/, "\u00A0$1")}</p>
    </div>

    <p class="author">Daniel Eden, Designer</p>

  </html>
  `
}

const getScreenshot = async function ({ html, type = "png" }) {
  if (!html) {
    throw Error("You must provide an html property.")
  }

  const browser = await puppeteer.launch({
    args: chrome.args,
    executablePath: await chrome.executablePath,
    headless: false,
  })

  const fontsToLoad = ["Soehne Breit Web", "National 2 Web"]

  const waitForFontFaces = `Promise.all([ '${fontsToLoad.join(
    `', '`
  )}' ].map(fontName => new FontFaceObserver(fontName).load()))`

  const page = await browser.newPage()
  await page.setContent(html, { waitUntil: "networkidle2" })
  const element = await page.$("html")
  await injectFile(
    page,
    path.join(
      __dirname,
      "../../node_modules/fontfaceobserver/fontfaceobserver.standalone.js"
    )
  )
  await page.evaluate(waitForFontFaces)
  return await element.screenshot({ type }).then(async (data) => {
    await browser.close()
    return data
  })
}

export default async (request: NowRequest, response: NowResponse) => {
  const { title } = request.query

  if (!title) {
    response.status(404).end()
  }

  const html = generateHTML(String(title))
  const result = await getScreenshot({ html })
  response.writeHead(200, { "Content-Type": "image/png" })
  response.end(result)
}
