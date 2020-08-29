import { MDXFile, MDXFrontMatter } from "*.mdx"
import Layout from "@/components/Layout"
import { components as defaultComponents } from "@/designSystem/DesignSystemProvider"
import allBlogPosts from "@/utils/mdxUtils"
import { generateOgImages } from "@/utils/ogImage"
import smartypants from "@ngsctt/remark-smartypants"
import prism from "mdx-prism"
import { GetStaticPaths, GetStaticProps } from "next"
import hydrate from "next-mdx-remote/hydrate"
import renderToString from "next-mdx-remote/render-to-string"
import dynamic from "next/dynamic"
import { ComponentType } from "react"
import katex from "rehype-katex"
import slug from "rehype-slug"
import abbr from "remark-abbr"
import math from "remark-math"
import toc from "remark-toc"

// OpaqueComponentType is basically a generic that will be used for dynamically
// importing components in MDX files.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
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
    CFVideo: {
      regex: /<CFVideo/,
      component: dynamic(() => import("@/components/CFVideo")),
    },
    Codepen: {
      regex: /<Codepen/,
      component: dynamic(() => import("react-codepen-embed")),
    },
    TypedSystemsButton: {
      regex: /<TypedSystemsButton/,
      component: dynamic(() => import("@/components/typed-systems-components")),
    },
  }

  // Search the passed string for component instances and include them if
  // necessary
  const map: { [key: string]: OpaqueComponentType } = {}
  for (const prop in availableComponents) {
    const currentComponent = availableComponents[prop]
    const matches = currentComponent.regex.test(source)
    if (matches) {
      map[prop] = currentComponent.component
    }
  }

  return map
}

interface PostPageProps {
  source: string
  frontMatter: MDXFrontMatter
  extraComponents: string[]
}

export default function PostPage({
  source,
  frontMatter,
  extraComponents,
}: PostPageProps) {
  const components = {
    ...defaultComponents,
    // Slightly hack the component map function by pretending to instantiate a
    // JSX symbol for each extra component
    ...buildComponentMap(`<${extraComponents.join("<")}`),
  }

  const content = hydrate(source, { components })
  return <Layout frontMatter={frontMatter}>{content}</Layout>
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params) {
    console.error("No parameters passed for static generation")
    return { props: {} }
  }

  const postKey = (params.slug as string[]).join("/")

  const source = allBlogPosts.get(postKey) as MDXFile

  const { content, frontMatter } = source

  const extraComponents = buildComponentMap(content)

  const components = {
    ...defaultComponents,
    ...extraComponents,
  }

  const mdxSource = await renderToString(content, {
    components,
    mdxOptions: {
      remarkPlugins: [abbr, smartypants, math, toc],
      rehypePlugins: [katex, prism, slug],
    },
    scope: frontMatter,
  })

  return {
    props: {
      source: mdxSource,
      frontMatter,
      // Next.js requires that static props are JSON serializable, so we have to
      // just pass the extra components as strings.
      extraComponents: Object.keys(extraComponents),
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    await generateOgImages(
      Array.from(allBlogPosts.values()).map((post) => post.frontMatter)
    )
  } catch {
    throw new Error(`Unable to generate image for posts`)
  }

  const paths = Array.from(allBlogPosts.keys()).map((slug) => ({
    params: { slug: slug.split("/") },
  }))

  return {
    paths,
    fallback: false,
  }
}
