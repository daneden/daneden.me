import { Post } from "@/utils/mdx/sources"
import opengraphImage from "@/utils/opengraphImage"

export default async function og({
  params: { slug },
}: {
  params: { slug: string[] }
}) {
  const post = await Post.getMdxNode(slug)
  return await opengraphImage(post?.frontMatter.title)
}
