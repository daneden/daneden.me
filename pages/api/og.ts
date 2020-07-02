import ogImage from "@/utils/ogImage"
import { NowRequest, NowResponse } from "@now/node"

function asHTML(buffer: Buffer) {
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

  if (!title) {
    response.status(404).end()
  }

  const buffer = ogImage(String(title))

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

  response.writeHead(200, { "Content-Type": "image/png" })
  response.end(buffer)
  return
}
