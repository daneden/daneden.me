import { getPosts } from "@/app/get-posts"
import opengraphImage from "@/app/utils/opengraphImage"

export const runtime = "edge"

export async function GET(_req: Request, { params: { id } }) {
  const posts = getPosts()
  const post = posts.find((p) => p.id === id)

  if (!post) {
    return new Response("Not found", { status: 404 })
  }

  return await opengraphImage(post.title)
}
