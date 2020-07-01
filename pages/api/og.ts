/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { NowRequest, NowResponse } from "@now/node"
import chrome from "chrome-aws-lambda"
import puppeteer from "puppeteer-core"

const getScreenshot = async function ({ url, type = "png" }) {
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
  await page.setRequestInterception(true)

  // add header for the navigation requests
  page.on("request", (request) => {
    // Do nothing in case of non-navigation requests.
    if (!request.isNavigationRequest()) {
      request.continue()
      return
    }
    // Add a new header for navigation request.
    const headers = request.headers()
    headers["X-Internal"] = "true"
    request.continue({ headers })
  })

  await page.goto(url, {
    waitUntil: "networkidle2",
  })

  const element = await page.$("html")
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

  const result = await getScreenshot({
    url: `https://${process.env.VERCEL_URL}/og?title=${title}`,
  })

  response.writeHead(200, { "Content-Type": "image/png" })
  response.end(result)
  return
}
