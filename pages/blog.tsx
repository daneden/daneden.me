/** @jsx jsx */
import { Atoms, PlainList } from "@/designSystem"
import blogPosts from "@/utils/mdxUtils"
import { css, jsx } from "@emotion/core"
import Layout from "components/Layout"
import PostLink from "components/PostLink"
import { ReactElement } from "react"

const liStyle = css`
  margin-bottom: ${Atoms.spacing.medium};
`
export default function Blog(): ReactElement<typeof Layout> {
  return (
    <Layout frontMatter={{ title: "Blog" }}>
      <PlainList>
        {blogPosts.map((post) => {
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
