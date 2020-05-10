/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import { GetStaticProps } from "next"
import { ReactElement } from "react"
import { Helmet } from "react-helmet"
import {
  Atoms,
  H1,
  PlainList,
} from "../../components/designSystem/designSystem"
import Layout from "../../components/Layout"
import PostLink from "../../components/PostLink"
import getFrontMatterForFile, {
  FrontMatter,
} from "../../utils/getFrontMatterForFile"

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
    <Layout frontMatter={{}}>
      <Helmet title="Blog" />
      <H1>Blog</H1>
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
  const posts = ((context): FrontMatter[] => {
    const keys = context.keys()

    return keys.map((key) => {
      // TODO [#571]: Improve frontmatter importing code
      // This shouldn't be hard-coded if we can avoid it.
      const frontMatter = getFrontMatterForFile("pages/blog/" + key)

      return {
        slug: key.replace(/\.mdx?$/, "").replace(/^\./, "blog"),
        ...frontMatter,
      }
    })
  })(require.context("./", true, /\.mdx?$/, "sync"))

  return {
    props: {
      posts,
    },
  }
}
