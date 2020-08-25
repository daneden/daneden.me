import { MDXPost } from "*.mdx"
import CFVideo from "@/components/CFVideo"
import Layout from "@/components/Layout"
import { Button } from "@/components/typed-systems-components"
import { components as defaultComponents } from "@/designSystem/DesignSystemProvider"
import allBlogPosts from "@/utils/mdxUtils"
import smartypants from "@ngsctt/remark-smartypants"
import fs from "fs"
import matter from "gray-matter"
import prism from "mdx-prism"
import { GetStaticPaths, GetStaticProps } from "next"
import hydrate from "next-mdx-remote/hydrate"
import renderToString from "next-mdx-remote/render-to-string"
import Head from "next/head"
import { useRouter } from "next/router"
import path from "path"
import Codepen from "react-codepen-embed"
import { BlockMath, InlineMath } from "react-katex"
import slug from "rehype-slug"
import toc from "remark-toc"

const components = {
  ...defaultComponents,
  BlockMath,
  Button,
  CFVideo,
  Codepen,
  InlineMath,
}

const katexPosts = ["Subatomic Design Systems"]

export default function PostPage({
  source,
  frontMatter,
}: {
  source: string
  frontMatter: MDXPost
}) {
  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  const shouldRequestKatex = katexPosts.reduce(
    (prev, curr) => prev || frontMatter.title.includes(curr),
    false
  )

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
  const mdxSource = await renderToString(content, {
    components,
    mdPlugins: [smartypants, toc],
    remarkPlugins: [prism, slug],
    scope: data,
  })
  return { props: { source: mdxSource, frontMatter: data } }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = allBlogPosts
    .map((post) => post.slug.replace(/^\/blog\//, "").split("/"))
    .map((path) => ({ params: { slug: path } }))

  return {
    paths,
    fallback: true,
  }
}
