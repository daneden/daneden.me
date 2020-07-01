/** @jsx jsx */
import { MDXPost } from "*.mdx"
import formatDate from "@/utils/formatDate"
import { css, jsx } from "@emotion/core"
import { ReactElement } from "react"
import { Atoms } from "./designSystem"
import PlainLink from "./designSystem/PlainLink"

interface PlainLinkProps {
  post: MDXPost
}

const liStyle = css`
  display: block;
  margin-bottom: ${Atoms.spacing.medium};
`

const PostLink = ({ post }: PlainLinkProps): ReactElement<HTMLDivElement> => {
  const date = formatDate(post.date)

  return (
    <PlainLink css={liStyle} href={post.slug}>
      <div>{post.title}</div>
      <time>
        <em>{date}</em>
      </time>
    </PlainLink>
  )
}

export default PostLink
