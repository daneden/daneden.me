import { getPosts } from "@/app/get-posts"
import opengraphImage from "@/app/utils/opengraphImage"

export const runtime = "edge"

export async function GET(_req: Request, { params }: { params: Promise<{ id: string }>}) {
  const posts = getPosts()
  const id = (await params).id
  const post = posts.find((p) => p.id === id)

  if (!post) {
    return new Response("Not found", { status: 404 })
  }

  return await opengraphImage(post.title)
}
