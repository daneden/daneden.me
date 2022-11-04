import { Description, Thumbnail } from "@/components/Metatags"
import { Post } from "@/utils/mdx/sources"

export default async function Head({
  params,
}: {
  params: {
    slug: string[]
  }
}) {
  const post = await Post.getMdxNode(params?.slug?.join("/"))

  const excerpt = post?.frontMatter.excerpt
  return (
    <>
      <title>{post?.frontMatter.title + " | Daniel Eden, Designer"}</title>
      {excerpt != undefined ? <Description>{excerpt}</Description> : null}
      <Thumbnail
        url={`https://${process.env.VERCEL_URL}/api/og?title=${post?.frontMatter.title}`}
      />
    </>
  )
}
