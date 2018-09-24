import React from "react"
import { css } from "react-emotion"

import { Atoms, PlainList } from "./designSystem/designSystem"
import PostLink from "./PostLink"
import AllBlogPostsQuery from "../queries/AllBlogPostsQuery"
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
              <li className={liStyle} key={path}>
                <PostLink post={{ ...edge.node, slug: path }} />
              </li>
            )
          })}
        </PlainList>
      )}
    />
  )
}
