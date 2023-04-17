import formatDate from "@/utils/formatDate"
import { getPost, getPosts } from "@/utils/mdx/sources"
import { rehypePlugins, remarkPlugins } from "@/utils/mdxPlugins.mjs"
import { Metadata } from "next"
import { serialize } from "next-mdx-remote/serialize"
import { notFound } from "next/navigation"
import { MdxContent } from "../../../components/MdxContent"
import styles from "./styles.module.css"

export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string[] }
}): Promise<Metadata> {
  // read route params
  const post = await getPost(slug?.join("/"))

  const imageURL = new URL(
    `${process.env.ENVIRONMENT == "production" ? "https" : "http"}://${
      process.env.VERCEL_URL
    }/api/opengraph-image?title=${post?.frontMatter.title}`
  )

  return {
    title: post?.frontMatter.title,
    description: post?.frontMatter.excerpt,
    openGraph: {
      description: post?.frontMatter.excerpt,
      title: post?.frontMatter.title,
      images: [imageURL],
    },
    twitter: {
      description: post?.frontMatter.excerpt,
      title: post?.frontMatter.title,
      images: [imageURL],
    },
  }
}

interface PostPageProps {
  params: {
    slug: string[]
  }
}

export async function generateStaticParams() {
  const files = await getPosts()

  return files?.map((file) => ({
    slug: file?.slug.split("/"),
  }))
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPost(params?.slug?.join("/"))

  if (!post) {
    notFound()
  }

  const mdx = await serialize(post.content, {
    mdxOptions: {
      remarkPlugins: remarkPlugins,
      rehypePlugins: rehypePlugins,
    },
  })

  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.title}>{post.frontMatter.title}</h1>
        <time className="sans meta small">
          Published {formatDate(post.frontMatter.date)}
        </time>
      </header>
      <MdxContent source={mdx} rawSource={post.content} />
    </>
  )
}
