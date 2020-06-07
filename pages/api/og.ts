import { NowRequest, NowResponse } from "@now/node"
import chrome from "chrome-aws-lambda"
import fs from "fs"
import puppeteer from "puppeteer-core"
import { Atoms } from "@/designSystem"

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
        src: url('/fonts/soehne-breit-web-fett.woff2') format('woff2');
      }

      @font-face {
        font-family: 'National 2';
        font-style: normal;
        src: url('/fonts/National2Web-Regular.woff2') format('woff2');
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

  const page = await browser.newPage()
  await page.setContent(html, {
    waitUntil: "networkidle0",
  })
  const element = await page.$("html")
  await page.evaluateHandle("document.fonts.ready")

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
