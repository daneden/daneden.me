import { MDXPost } from "*.mdx"
import Layout from "@/components/Layout"
import allPosts from "@/utils/mdxUtils"
import Head from "next/head"
import { ReactNode } from "react"

const katexPosts = ["Subatomic Design Systems"]

const PostLayout = (frontMatter: MDXPost) => {
  const extendedFrontMatter = allPosts.find(
    (post) => post.__resourcePath === frontMatter.__resourcePath
  )

  const Post = ({ children }: { children: ReactNode }) => {
    /**
     * KaTeX comes with a lot of CSS, which we don't want to use on every post.
     * We'll keep a record of the posts using KaTeX in `katexPosts` and check
     * here whether or not to request the CSS in the current page.
     */
    const shouldRequestKatex = katexPosts.reduce(
      (prev, curr) => prev || frontMatter.title.includes(curr),
      false
    )

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
        <Layout frontMatter={extendedFrontMatter}>{children}</Layout>
      </>
    )
  }

  return Post
}

export default PostLayout
