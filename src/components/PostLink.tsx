import { MDXPost } from "*.mdx"
import formatDate from "@/utils/formatDate"
import cxs from "cxs/component"
import { ReactElement } from "react"
import { Atoms, Small } from "./designSystem"
import PlainLink from "./designSystem/PlainLink"

interface Props {
  post: MDXPost
}

const Post = cxs(PlainLink)({
  display: "block",
  marginBottom: Atoms.spacing.medium,
})

const PostLink = ({ post }: Props): ReactElement<HTMLDivElement> => {
  const date = formatDate(post.date)

  return (
    <Post href={post.slug as string}>
      <div>{post.title}</div>
      <time>
        <Small display="block">{date}</Small>
      </time>
    </Post>
  )
}

export default PostLink
