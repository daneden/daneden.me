import { Description, Thumbnail, Title } from "@/components/Metatags"
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
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width" />
      <title>{post?.frontMatter.title + " | Daniel Eden, Designer"}</title>
      <Title>{post?.frontMatter.title ?? "Daniel Eden, Designer"}</Title>
      {excerpt != undefined ? <Description>{excerpt}</Description> : null}
      <Thumbnail
        url={`https://${process.env.VERCEL_URL}/api/og?title=${post?.frontMatter.title}`}
      />
      <link href="/images/face.jpeg" rel="icon" type="image/jpeg" />
    </>
  )
}
