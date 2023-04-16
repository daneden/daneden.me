import formatDate from "@/utils/formatDate"
import { Post } from "@/utils/mdx/sources"
import { rehypePlugins, remarkPlugins } from "@/utils/mdxPlugins.mjs"
import { Metadata } from "next"
import { serialize } from "next-mdx-remote/serialize"
import { MdxContent } from "../../../components/MdxContent"
import styles from "./styles.module.css"

type Props = {
  params: { slug: string[] }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const post = await Post.getMdxNode(params?.slug?.join("/"))

  return {
    title: post?.frontMatter.title,
    description: post?.frontMatter.excerpt,
  }
}

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
      <header className={styles.header}>
        <h1 className={styles.title}>{post?.frontMatter.title}</h1>
        <time className="sans meta small">
          Published {formatDate(post?.frontMatter.date)}
        </time>
      </header>
      <MdxContent source={mdx} rawSource={post!.content} />
    </>
  )
}
