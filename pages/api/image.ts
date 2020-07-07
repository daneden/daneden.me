import { NowRequest, NowResponse } from "@now/node"
import sharp from "sharp"
export default async (request: NowRequest, response: NowResponse) => {
  const {
    query: { name, w: width, fm: format, h: height },
    headers: { host, accept },
  } = request

  const supportsWebP = accept?.includes("image/webp")

  const image = await fetch(`http://${host}${name}`).then((d) => d.blob())

  const imageAsArrayBuffer = await image.arrayBuffer()
  const imageBuffer = Buffer.from(imageAsArrayBuffer)

  const sharped = sharp(imageBuffer).resize(Number(width))
  let result: Buffer

  if (supportsWebP) {
    result = await sharped.webp().toBuffer()
  } else {
    result = await sharped.toBuffer()
  }
  response.setHeader("Content-Type", supportsWebP ? "image/webp" : image.type)
  response.status(200).send(result)
}
