import Image from "@/components/Image"
import formatDate from "@/utils/formatDate"
import { client } from "@/utils/graphql-client"
import { rehypePlugins, remarkPlugins } from "@/utils/mdxPlugins.mjs"
import { gql } from "graphql-request"
import { Metadata } from "next"
import { MDXRemote } from "next-mdx-remote/rsc"
import dynamic from "next/dynamic"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ComponentType } from "react"
import styles from "./styles.module.css"

export const runtime = "edge"

async function allPosts() {
  return await client.request<{ posts: Post[] }>(gql`
    query {
      posts(first: 100) {
        slug
        title
        excerpt
      }
    }
  `)
}

async function getPost(slug: string) {
  return await client.request<{ post: Post }>(
    gql`
      query getPostBySlug($slug: String!) {
        posts(where: { slug: $slug }) {
          title
          excerpt
          content
          date
        }
      }
    `,
    {
      slug,
    }
  )
}

export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string[] }
}): Promise<Metadata> {
  // read route params
  const { post } = await getPost(slug.join("/"))

  if (!post) {
    return Promise.reject()
  }

  const imageURL = new URL(
    `${process.env.ENVIRONMENT == "production" ? "https" : "http"}://${
      process.env.VERCEL_URL
    }/api/opengraph-image?title=${post.title}`
  )

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      description: post.excerpt ?? undefined,
      title: post.title,
      images: [imageURL],
    },
    twitter: {
      description: post.excerpt ?? undefined,
      title: post.title,
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
  const { posts } = await allPosts()
  return posts.map((post) => post.slug.split("/"))
}

const defaultComponents = {
  a: (props: any) => <Link href={props.href}>{props.children}</Link>,
  Image,
}

// OpaqueComponentType is basically a generic that will be used for dynamically
// importing components in MDX files.
type OpaqueComponentType = ComponentType<any>

interface ComponentMap {
  [key: string]: {
    regex: RegExp
    component: OpaqueComponentType
  }
}

/**
 * Takes a Markdown/MDX string and returns an object of custom/imported
 * components found.
 *
 * When adding new components to a post/MDX page, `componentsMap` needs to be
 * updated.
 */
function buildComponentMap(source: string) {
  // Define the components that should be made optionally available in MDX
  const availableComponents: ComponentMap = {
    Video: {
      regex: /<Video/,
      component: dynamic(() => import("@/components/Video")),
    },
    TypedSystemsButton: {
      regex: /<TypedSystemsButton/,
      component: dynamic(() => import("@/components/blog/TypedSystemsButton")),
    },
    RedesignGallery: {
      regex: /<RedesignGallery/,
      component: dynamic(() => import("@/components/blog/RedesignGallery")),
    },
    SaturationDemo: {
      regex: /<SaturationDemo/,
      component: dynamic(() => import("@/components/blog/SaturationDemo")),
    },
    DrawingWithNumbersSketch: {
      regex: /<DrawingWithNumbersSketch/,
      component: dynamic(
        () => import("@/components/blog/DrawingWithNumbersSketch")
      ),
    },
  }

  // Search the passed string for component instances and include them if
  // necessary
  const map: { [key: string]: OpaqueComponentType } = {}
  for (const componentKey in availableComponents) {
    const currentComponent = availableComponents[componentKey]
    const matches = currentComponent.regex.test(source)
    if (matches) {
      map[componentKey] = currentComponent.component
    }
  }

  return map
}

export default async function PostPage({ params: { slug } }: PostPageProps) {
  const { post } = await getPost(slug.join("/"))

  if (!post) {
    notFound()
  }

  const components = {
    ...defaultComponents,
    ...buildComponentMap(post.content),
  }

  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.title}>{post.title}</h1>
        <time className="sans meta small">
          Published {formatDate(post.date)}
        </time>
      </header>

      {/* @ts-expect-error */}
      <MDXRemote
        components={components}
        source={post.content}
        options={{ mdxOptions: { remarkPlugins, rehypePlugins } }}
      />
    </>
  )
}
