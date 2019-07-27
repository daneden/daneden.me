import { css, jsx } from "@emotion/core"

import { Atoms, PlainList } from "designSystem/designSystem"
import PostLink from "./PostLink"
import useBlogPostsQuery from "hooks/useBlogPostsQuery"
import slug from "utils/slugFromPath"

const liStyle = css`
  margin-bottom: ${Atoms.spacing.medium};
`

export default function BlogPosts() {
  const { allMdx } = useBlogPostsQuery()
  return (
    <PlainList>
      {allMdx.edges.map(edge => {
        const path = slug(edge.node.parent.name)
        return (
          <li css={liStyle} key={path}>
            <PostLink post={{ ...edge.node, slug: path }} />
          </li>
        )
      })}
    </PlainList>
  )
}
