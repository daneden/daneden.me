import ogImage from "@/utils/ogImage"
import { NowRequest, NowResponse } from "@now/node"
import zlib from "zlib"

// Requiring fonts in serverless functions is tricky; this code is a bit
// fragile and relies on config in vercel.json
const soehne = process.cwd() + "/public/fonts/ogFonts/SoehneBreitApp-Fett.ttf"
const national =
  process.cwd() + "/public/fonts/ogFonts/National2App-Regular.ttf"

// For Cypress tests (and sanity-checking), sometimes we want to return the
// result as a HTML page
function asHTML(buffer: Buffer): string {
  return `
  <!DOCTYPE html>
  <html>
  <img
    width=600
    height=600
    src="data:image/png;base64,${buffer.toString("base64")}"
  />
  </html>
  `
}

export default async (
  request: NowRequest,
  response: NowResponse
): Promise<void> => {
  const { title, as } = request.query

  // Return 404 for requests without a title
  if (!title) {
    response.status(404).end()
  }

  // Create the image, passing in the custom fonts
  const buffer = ogImage(String(title), {
    display: {
      path: soehne,
      config: {
        family: "Soehne",
      },
    },
    author: {
      path: national,
      config: {
        family: "National 2",
      },
    },
  })

  // Return HTML pages when requested
  if (!buffer) {
    return
  }

  if (as === "html") {
    const data = asHTML(buffer)
    response.writeHead(200, {
      "Content-Type": "text/html",
      "Content-Length": data.length,
    })
    response.write(data)
    response.end()
    return
  }

  response.writeHead(200, {
    "Content-Type": "image/png",
    "Content-Encoding": "deflate, gzip",
  })

  // Facebook's Open Graph requires og:image to be gzip,deflate encoded
  const deflated = zlib.deflateSync(buffer)
  const compressed = zlib.gzipSync(deflated)

  response.end(compressed)
  return
}
