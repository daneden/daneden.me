import React from "react"

import PlainLink from "./designSystem/PlainLink"

const PostLink = ({ post }) => (
  <div>
    <PlainLink to={post.slug}>
      <div>{post.frontmatter.title}</div>
      <em className="em meta">{post.frontmatter.date}</em>
    </PlainLink>
  </div>
)

export default PostLink
