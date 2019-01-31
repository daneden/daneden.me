import React from "react"

import Atoms from "designSystem/atoms"
import PlainLink from "designSystem/PlainLink"
import Sans from "designSystem/Sans"
import styled from "@emotion/styled"

const Timestamp = styled(Sans)`
  color: ${Atoms.colors.meta};
`

const PostLink = ({ post }) => (
  <div>
    <PlainLink to={post.slug}>
      <div>{post.frontmatter.title}</div>
      <Timestamp>{post.frontmatter.date}</Timestamp>
    </PlainLink>
  </div>
)

export default PostLink
