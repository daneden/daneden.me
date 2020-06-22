/** @jsx jsx */
import { Atoms, PlainList } from "@/designSystem"
import { css, jsx } from "@emotion/core"
import Layout from "components/Layout"
import PostLink from "components/PostLink"
import { GetStaticProps } from "next"
import { ReactElement } from "react"
import { frontMatter as blogPosts } from "./**/*.mdx"

const liStyle = css`
  margin-bottom: ${Atoms.spacing.medium};
`
export default function Index({ posts }): ReactElement<typeof Layout> {
  if (posts === "undefined") return null

  const postsToShow = posts
    .filter((post) => !post.hidden)
    .map((post) => {
      return {
        ...post,
        date: new Date(post.date),
      }
    })
    .sort((a, b) => {
      return b.date - a.date
    })

  return (
    <Layout frontMatter={{ title: "Blog" }}>
      <PlainList>
        {postsToShow.map((post) => {
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

export const getStaticProps: GetStaticProps = async (context) => {
  const posts = blogPosts.map((frontmatter) => {
    return {
      ...frontmatter,
      slug: frontmatter.__resourcePath
        .replace(/^blog\//, "/blog/")
        .replace(".mdx", ""),
    }
  })

  return {
    props: {
      posts,
    },
  }
}
