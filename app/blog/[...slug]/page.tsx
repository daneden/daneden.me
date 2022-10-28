import { MDXFile } from "*.mdx"
import Image from "@/components/Image"
import Layout from "@/components/Layout"
import { rehypePlugins, remarkPlugins } from "@/utils/mdxPlugins.mjs"
import allBlogPosts from "@/utils/mdxUtils"
import { GetStaticPaths } from "next"
import { MDXRemote } from "next-mdx-remote"
import { serialize } from "next-mdx-remote/serialize"
import dynamic from "next/dynamic"
import Link from "next/link"
import { ComponentType } from "react"

const defaultComponents = {
  a: Link,
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
      component: dynamic(() => import("react-codepen-embed")),
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

export default async function PostPage({
  params: { slug },
}: {
  params: { slug: string[] }
}) {
  const postKey = (slug as string[]).join("/")

  const source = allBlogPosts.get(postKey) as MDXFile

  const { content, frontMatter } = source

  const extraComponents = buildComponentMap(content)

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: remarkPlugins,
      rehypePlugins: rehypePlugins,
    },
  })

  const components = {
    ...defaultComponents,
    // Slightly hack the component map function by pretending to instantiate a
    // JSX symbol for each extra component
    ...extraComponents,
  }
  return (
    <Layout frontMatter={frontMatter}>
      <MDXRemote {...mdxSource} components={components} />
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Array.from(allBlogPosts.keys()).map((slug) => ({
    params: { slug: slug.split("/") },
  }))

  return {
    paths,
    fallback: false,
  }
}
