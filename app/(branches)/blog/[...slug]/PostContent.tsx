import Image from "@/components/Image"
import { Post, allPosts } from "contentlayer/generated"
import { Metadata } from "next"
import { getMDXComponent } from "next-contentlayer/hooks"
import dynamic from "next/dynamic"
import Link from "next/link"
import { ComponentType } from "react"

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

export default function PostContent({ post }: { post: Post }) {
  // Parse the MDX file via the useMDXComponent hook.
  const MDXContent = getMDXComponent(post.body.code)

  const components = {
    ...defaultComponents,
    ...buildComponentMap(post.body.raw),
  }

  return <MDXContent components={components} />
}
