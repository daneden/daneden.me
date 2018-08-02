import React from "react"
import { StaticQuery } from "gatsby"

import PostLink from "./PostLink"
import queries from "../utils/queries"

export default function BlogPosts() {
  return (
    <StaticQuery
      query={queries.ALL_BLOG_POSTS}
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
