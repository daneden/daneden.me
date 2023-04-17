import { Post } from "@/utils/mdx/sources"
import opengraphImage from "@/utils/opengraphImage"
import { notFound } from "next/navigation"

export default async function og({
  params: { slug },
}: {
  params: { slug: string[] }
}) {
  const post = await Post.getMdxNode(slug)

  if (!post) {
    notFound()
  }

  return await opengraphImage(post?.frontMatter.title)
}
