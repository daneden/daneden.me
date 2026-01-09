import { getPosts } from "@/app/get-posts"
import opengraphImage from "@/app/utils/opengraphImage"

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

export async function generateStaticParams() {
  const posts = getPosts()
  return posts.map((post) => ({
    year: post.slug.split("/")[0],
    id: post.id,
  }))
}

export default async function Image({
  params,
}: {
  params: Promise<{ year: string; id: string }>
}) {
  const { id } = await params
  const post = getPosts().find((p) => p.id === id)

  if (!post) {
    return await opengraphImage()
  }

  return await opengraphImage(post.title)
}
