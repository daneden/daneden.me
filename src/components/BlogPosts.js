/** @jsx jsx */
import { css, jsx } from "@emotion/core"

import { Atoms, PlainList } from "designSystem/designSystem"
import PostLink from "./PostLink"
import AllBlogPostsQuery from "queries/AllBlogPostsQuery"
import slug from "utils/slugFromPath"

const liStyle = css`
  margin-bottom: ${Atoms.spacing.medium};
`

export default function BlogPosts() {
  return (
    <AllBlogPostsQuery
      render={data => (
        <PlainList>
          {data.allMdx.edges.map(edge => {
            const path = slug(edge.node.parent.name)
            return (
              <li css={liStyle} key={path}>
                <PostLink post={{ ...edge.node, slug: path }} />
              </li>
            )
          })}
        </PlainList>
      )}
    />
  )
}
