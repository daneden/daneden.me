import formatDate from "@/utils/formatDate"
import { allPosts } from "contentlayer/generated"
import { Metadata } from "next"
import { notFound } from "next/navigation"
import PostContent from "./PostContent"
import styles from "./styles.module.css"

export const runtime = "edge"

export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string[] }
}): Promise<Metadata> {
  // read route params
  const post = allPosts.find((post) => post.url === `/blog/${slug.join("/")}`)

  const imageURL = new URL(
    `${process.env.ENVIRONMENT == "production" ? "https" : "http"}://${
      process.env.VERCEL_URL
    }/api/opengraph-image?title=${post?.title}`
  )

  return {
    title: post?.title,
    description: post?.excerpt,
    openGraph: {
      description: post?.excerpt,
      title: post?.title,
      images: [imageURL],
    },
    twitter: {
      description: post?.excerpt,
      title: post?.title,
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
  return allPosts.map((post) => ({
    slug: post?.url.replace(/\/?blog\//, "").split("/"),
  }))
}

export default async function PostPage({ params }: PostPageProps) {
  const post = allPosts.find(
    (post) => post.url === `/blog/${params.slug.join("/")}`
  )

  if (!post) {
    notFound()
  }

  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.title}>{post.title}</h1>
        <time className="sans meta small">
          Published {formatDate(post.date)}
        </time>
      </header>

      <PostContent post={post} />
    </>
  )
}
