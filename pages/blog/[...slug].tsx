import { MDXPost } from "*.mdx"
import Layout from "@/components/Layout"
import { components as defaultComponents } from "@/designSystem/DesignSystemProvider"
import allBlogPosts from "@/utils/mdxUtils"
import smartypants from "@ngsctt/remark-smartypants"
import fs from "fs"
import matter from "gray-matter"
import prism from "mdx-prism"
import { GetStaticPaths, GetStaticProps } from "next"
import hydrate from "next-mdx-remote/hydrate"
import renderToString from "next-mdx-remote/render-to-string"
import dynamic from "next/dynamic"
import Head from "next/head"
import path from "path"
import { ComponentType } from "react"
import slug from "rehype-slug"
import toc from "remark-toc"

const katexPosts = ["Subatomic Design Systems"]

interface ComponentMapItem {
  regex: RegExp
  component: ComponentType<any>
}

function buildComponentMap(source: string) {
  const BlockMath = dynamic(() =>
    import("react-katex").then((mod) => mod.BlockMath)
  )
  const InlineMath = dynamic(() =>
    import("react-katex").then((mod) => mod.InlineMath)
  )
  const TypedSystemsButton = dynamic(() =>
    import("@/components/typed-systems-components")
  )
  const Codepen = dynamic(() => import("react-codepen-embed"))
  const CFVideo = dynamic(() => import("@/components/CFVideo"))

  const componentsMap: {
    [key: string]: ComponentMapItem
  } = {
    BlockMath: {
      regex: /<BlockMath/,
      component: BlockMath,
    },
    InlineMath: {
      regex: /<InlineMath/,
      component: InlineMath,
    },
    CFVideo: {
      regex: /<CFVideo/,
      component: CFVideo,
    },
    Codepen: {
      regex: /<Codepen/,
      component: Codepen,
    },
    TypedSystemsButton: {
      regex: /<TypedSystemsButton/,
      component: TypedSystemsButton,
    },
  }

  const map: { [key: string]: ComponentType<any> } = {}
  for (const prop in componentsMap) {
    const currentComponent = componentsMap[prop]
    const matches = currentComponent.regex.test(source)
    if (matches) {
      map[prop] = currentComponent.component
    }
  }

  return map
}

export default function PostPage({
  source,
  frontMatter,
  extraComponents,
}: {
  source: string
  frontMatter: MDXPost
  extraComponents: string[]
}) {
  const shouldRequestKatex = katexPosts.reduce(
    (prev, curr) => prev || frontMatter.title.includes(curr),
    false
  )

  const components = {
    ...defaultComponents,
    ...buildComponentMap(`<${extraComponents.join("<")}`),
  }

  const content = hydrate(source, { components })
  return (
    <>
      {shouldRequestKatex ? (
        <Head>
          <link
            crossOrigin="anonymous"
            href="https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css"
            integrity="sha384-zB1R0rpPzHqg7Kpt0Aljp8JPLqbXI3bhnPWROx27a9N0Ll6ZP/+DiW/UqRcLbRjq"
            rel="stylesheet"
          />
        </Head>
      ) : null}
      <Layout frontMatter={frontMatter}>{content}</Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params) {
    console.log("no params!")
    return { props: {} }
  }

  const postsDirectory = path.join(process.cwd(), "blog")
  const sourcePath = path.join(
    postsDirectory,
    `${(params.slug as string[]).join("/")}.mdx`
  )
  const source = fs.readFileSync(sourcePath)
  const { content, data } = matter(source)
  const frontMatter = data as MDXPost
  const extraComponents = buildComponentMap(content)

  const components = {
    ...defaultComponents,
    ...extraComponents,
  }

  console.log(frontMatter, buildComponentMap(content))

  const mdxSource = await renderToString(content, {
    components,
    mdPlugins: [smartypants, toc],
    remarkPlugins: [prism, slug],
    scope: data,
  })

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
      extraComponents: Object.keys(extraComponents),
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = allBlogPosts
    .map((post) => post.slug.replace(/^\/blog\//, "").split("/"))
    .map((path) => ({ params: { slug: path } }))

  return {
    paths,
    fallback: false,
  }
}
