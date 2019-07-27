import styled from "@emotion/styled"
import React from "react"
import PlainLink from "./designSystem/PlainLink"

const Timestamp = styled("span")`
  font-style: italic;
`

const PostLink = ({ post }) => (
  <div>
    <PlainLink to={post.slug}>
      <div>{post.frontmatter.title}</div>
      <Timestamp>({post.frontmatter.date})</Timestamp>
    </PlainLink>
  </div>
)

export default PostLink
