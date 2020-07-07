import { NowRequest, NowResponse } from "@now/node"
import imagemin from "imagemin"
import imageminWebp from "imagemin-webp"
import sharp from "sharp"
export default async (request: NowRequest, response: NowResponse) => {
  const {
    query: { name, w: width, fm: format, h: height },
    headers: { host, accept },
  } = request

  const webp = accept?.includes("image/webp")

  const image = await fetch(`http://${host}${name}`).then((d) => d.blob())

  const imageAsArrayBuffer = await image.arrayBuffer()
  const imageBuffer = Buffer.from(imageAsArrayBuffer)

  sharp(imageBuffer)
    .resize(Number(width))
    .toBuffer()
    .then(async (buffer) => {
      const optimised = webp
        ? await imageminWebp()(buffer)
        : await imagemin.buffer(buffer)
      response.setHeader("Content-Type", webp ? "image/webp" : image.type)
      response.status(200).send(optimised)
    })
    .catch((error) => {
      console.error(error)
      response.status(500).send("There was an error processing this request")
    })
}
