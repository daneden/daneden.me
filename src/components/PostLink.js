import React from "react"

import PlainLink from "./designSystem/PlainLink"

const PostLink = ({ post }) => (
  <div>
    <PlainLink to={post.fields.slug}>
      <span className="b m0">{post.frontmatter.title}</span>
      <span className="b h4 em meta">{post.frontmatter.date}</span>
    </PlainLink>
  </div>
)

export default PostLink
