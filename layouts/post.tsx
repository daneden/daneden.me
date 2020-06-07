import Layout from "components/Layout"
import Head from "next/head"
import { ReactElement } from "react"

const katexPosts = ["Subatomic Design Systems"]
export default function PostLayout(frontMatter) {
  return ({ children }): ReactElement<typeof Layout> => {
    /**
     * KaTeX comes with a lot of CSS, which we don't want to use on every post.
     * We'll keep a record of the posts using KaTeX in `katexPosts` and check
     * here whether or not to request the CSS in the current page.
     */
    const shouldRequestKatex = katexPosts.reduce((prev, curr) => {
      if (prev) return prev

      return frontMatter.title.includes(curr)
    })

    return (
      <>
        {shouldRequestKatex ? (
          <Head>
            <link
              rel="stylesheet"
              href="https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css"
              integrity="sha384-zB1R0rpPzHqg7Kpt0Aljp8JPLqbXI3bhnPWROx27a9N0Ll6ZP/+DiW/UqRcLbRjq"
              crossOrigin="anonymous"
            />
          </Head>
        ) : null}
        <Layout frontMatter={frontMatter}>{children}</Layout>
      </>
    )
  }
}
