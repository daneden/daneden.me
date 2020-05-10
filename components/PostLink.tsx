import React, { ReactElement } from "react"
import PlainLink from "./designSystem/PlainLink"

interface PlainLinkProps {
  post: {
    slug: string
    title: string
    date: Date
  }
}

const PostLink = ({ post }: PlainLinkProps): ReactElement<HTMLDivElement> => {
  const options = {
    year: "numeric",
    month: "long",
    day: "2-digit",
  }

  const date = post.date.toLocaleString("en-US", options)

  return (
    <div>
      <PlainLink href={post.slug}>
        <div>{post.title}</div>
        <time>
          <em>{date}</em>
        </time>
      </PlainLink>
    </div>
  )
}

export default PostLink
