import { NowRequest, NowResponse } from "@now/node"
import sharp from "sharp"
export default async (request: NowRequest, response: NowResponse) => {
  const {
    query: {
      name,
      w: width,
      fm: format = String(name).split(".")[1],
      h: height,
    },
    headers: { host, accept },
  } = request

  const supportsWebP = accept?.includes("image/webp")
  console.log(request.headers["user-agent"], accept)

  const image = await fetch(`http://${host}${name}`).then((d) => d.blob())

  const imageAsArrayBuffer = await image.arrayBuffer()
  const imageBuffer = Buffer.from(imageAsArrayBuffer)

  const sharped = sharp(imageBuffer).resize(Number(width))
  const result = await sharped.toFormat(format).toBuffer()

  response.setHeader("Content-Type", supportsWebP ? "image/webp" : image.type)
  response.status(200).send(result)
}
