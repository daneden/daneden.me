import { NowRequest, NowResponse } from "@now/node"
import imagemin from "imagemin"
import sharp from "sharp"
export default async (request: NowRequest, response: NowResponse) => {
  const {
    query: { name, w: width, fm: format, h: height },
    headers: { host },
  } = request

  console.log("connection.encrypted:", (request as any).connection.encrypted)
  console.log("protocol:", (request as any).protocol)

  const image = await fetch(`http://${host}${name}`).then((d) => d.blob())

  const imageAsArrayBuffer = await image.arrayBuffer()
  const imageBuffer = new Buffer(imageAsArrayBuffer)

  sharp(imageBuffer)
    .resize(Number(width))
    .toBuffer()
    .then(async (buffer) => {
      const optimised = await imagemin.buffer(buffer)
      response.status(200).send(optimised)
    })
    .catch((error) => {
      console.error(error)
      response.status(500).send("There was an error processing this request")
    })
}
