import ogImage from "@/utils/ogImage"
import { NowRequest, NowResponse } from "@now/node"

export default async (
  request: NowRequest,
  response: NowResponse
): Promise<void> => {
  const { title } = request.query

  if (!title) {
    response.status(404).end()
  }

  const buffer = ogImage(String(title))

  response.writeHead(200, { "Content-Type": "image/png" })
  response.end(buffer)
  return
}
