import Image from "@/components/Image"
import formatDate from "@/utils/formatDate"
import { getPost, getPosts } from "@/utils/mdx/sources"
import { rehypePlugins, remarkPlugins } from "@/utils/mdxPlugins.mjs"
import { Metadata } from "next"
import { MDXRemote } from "next-mdx-remote/rsc"
import dynamic from "next/dynamic"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ComponentType } from "react"
import styles from "./styles.module.css"

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
    Codepen: {
      regex: /<Codepen/,
      component: dynamic(() => import("@/components/Codepen")),
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

  const components = {
    ...defaultComponents,
    ...buildComponentMap(post.content),
  }

  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.title}>{post.frontMatter.title}</h1>
        <time className="sans meta small">
          Published {formatDate(post.frontMatter.date)}
        </time>
      </header>
      {/* @ts-expect-error */}
      <MDXRemote
        source={post.content}
        components={components}
        options={{ mdxOptions: { rehypePlugins, remarkPlugins } }}
      />
    </>
  )
}
