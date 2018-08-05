import React from "react"
import { css } from "react-emotion"

import Atoms from "./designSystem/atoms"
import PostLink from "./PostLink"
import PlainList from "./designSystem/PlainList"
import AllBlogPostsQuery from "../queries/AllBlogPostsQuery"

const liStyle = css`
  margin-bottom: ${Atoms.spacing.medium};
`

export default function BlogPosts() {
  return (
    <AllBlogPostsQuery
      render={data => (
        <PlainList>
          {data.allMdx.edges.map(edge => (
            <li className={liStyle} key={edge.node.fields.slug}>
              <PostLink post={edge.node} />
            </li>
          ))}
        </PlainList>
      )}
    />
  )
}
