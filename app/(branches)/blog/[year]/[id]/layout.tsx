import { Metadata } from "next"
import { getPosts } from "@/app/get-posts"
import { Params } from "./page"

export async function generateMetadata({
  params,
}: {
  params: Params
}): Promise<Metadata> {
  const { id } = await params
  const post = getPosts().find((p) => p.id === id)

  if (!post) {
    return {}
  }

  return {
    metadataBase: new URL("https://daneden.me"),
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: [
        {
          url: `/og/${post.id}`,
          width: 1200,
          height: 630,
        },
      ],
    },
  }
}

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
