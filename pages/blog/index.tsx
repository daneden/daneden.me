/** @jsx jsx */
import { Atoms, PlainList } from "@/designSystem"
import getFrontMatterForFile, {
  FrontMatter,
} from "@/utils/getFrontMatterForFile"
import { css, jsx } from "@emotion/core"
import Layout from "components/Layout"
import PostLink from "components/PostLink"
import { GetStaticProps } from "next"
import { ReactElement } from "react"

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
