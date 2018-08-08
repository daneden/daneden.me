import React from "react"

import PostLink from "./PostLink"
import AllBlogPostsQuery from "../queries/AllBlogPostsQuery"

export default function BlogPosts() {
  return (
    <AllBlogPostsQuery
      render={data => (
        <ul className="unlist">
          {data.allMdx.edges.map(edge => (
            <li className="ml" key={edge.node.fields.slug}>
              <PostLink post={edge.node} />
            </li>
          ))}
        </ul>
      )}
    />
  )
}
