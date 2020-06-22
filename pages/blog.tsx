/** @jsx jsx */
import { Atoms, PlainList } from "@/designSystem"
import { css, jsx } from "@emotion/core"
import Layout from "components/Layout"
import PostLink from "components/PostLink"
import { ReactElement } from "react"
import { frontMatter as blogPosts, MDXPost } from "./blog/**/*.mdx"

const liStyle = css`
  margin-bottom: ${Atoms.spacing.medium};
`
export default function Blog(): ReactElement<typeof Layout> {
  const posts = (blogPosts as MDXPost[])
    .map((frontmatter) => {
      return {
        ...frontmatter,
        slug: frontmatter.__resourcePath
          .replace(/^blog\//, "/blog/")
          .replace(".mdx", ""),
      }
    })
    .filter((post) => !post.hidden)
    .map((post) => {
      return {
        ...post,
        date: new Date(post.date),
      }
    })
    .sort((a, b) => {
      return Number(b.date) - Number(a.date)
    })

  return (
    <Layout frontMatter={{ title: "Blog" }}>
      <PlainList>
        {posts.map((post) => {
          return (
            <li css={liStyle} key={post.slug}>
              <PostLink post={post} />
            </li>
          )
        })}
      </PlainList>
    </Layout>
  )
}
