import formatDate from "@/utils/formatDate"
import { Post } from "@/utils/mdx/sources"
import { rehypePlugins, remarkPlugins } from "@/utils/mdxPlugins.mjs"
import { serialize } from "next-mdx-remote/serialize"
import { MdxContent } from "../../../components/MdxContent"

interface PostPageProps {
  params: {
    slug: string[]
  }
}

export async function generateStaticParams() {
  const files = await Post.getMdxFiles()

  return files?.map((file) => ({
    slug: file.slug.split("/"),
  }))
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await Post.getMdxNode(params?.slug?.join("/"))
  const mdx = await serialize(post!.content, {
    mdxOptions: {
      remarkPlugins: remarkPlugins,
      rehypePlugins: rehypePlugins,
    },
  })

  return (
    <>
      <header>
        <h1 className="zm">{post?.frontMatter.title}</h1>
        <time className="sans meta small">
          Published {formatDate(post?.frontMatter.date)}
        </time>
      </header>
      <MdxContent source={mdx} rawSource={post!.content} />
    </>
  )
}
