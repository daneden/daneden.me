import type { NextApiRequest, NextApiResponse } from "next"
import path from "path"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    body,
    query: { secret },
  } = req

  if (secret !== process.env.REVALIDATE_TOKEN) {
    return res.status(401).json({ message: "Invalid token" })
  }

  if (!body) {
    return res.status(422).json({ message: "Invalid request body" })
  }

  try {
    await res.revalidate(path.join("/", body.data.slug))
    return res.status(200).json({ revalidated: true })
  } catch (err) {
    return res.status(500).send("Error revalidating")
  }
}
