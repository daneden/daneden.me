/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { NowRequest, NowResponse } from "@now/node"
import chrome from "chrome-aws-lambda"
import puppeteer from "puppeteer-core"

const getScreenshot = async function ({ url, type = "png" }) {
  if (!url) {
    throw Error("You must provide a URL.")
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

  const fontFaceObserver = await (
    await fetch(
      `https://${process.env.VERCEL_URL}/static/fontfaceobserver.standalone.js`
    )
  )
    .text()
    .then((s) => s)

  console.log(fontFaceObserver.substring(0, 20))

  const page = await browser.newPage()
  await page.goto(url, {
    waitUntil: "networkidle2",
  })
  await page.addScriptTag({
    content: fontFaceObserver,
  })

  const element = page.$("html")
  await page.evaluate(waitForFontFaces)

  return await element.screenshot({ type }).then(async (data) => {
    await browser.close()
    return data
  })
}

export default async (request: NowRequest, response: NowResponse) => {
  const { title, image = true } = request.query

  if (!title) {
    response.status(404).end()
  }

  const result = await getScreenshot({
    url: `https://${process.env.VERCEL_URL}/og?title=${title}`,
  })
  response.writeHead(200, { "Content-Type": "image/png" })
  response.end(result)
  return
}
