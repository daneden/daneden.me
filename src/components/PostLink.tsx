import { MDXFrontMatter } from "*.mdx"
import formatDate from "@/utils/formatDate"
import { ReactElement } from "react"
import { Atoms, PlainLink, Small } from "./designSystem"

interface Props {
  post: MDXFrontMatter
}

const PostLink = ({ post }: Props): ReactElement<HTMLDivElement> => {
  const date = formatDate(post.date)

  return (
    <>
      <div className="post-link">
        <PlainLink href={`blog/${post.slug}`}>
          <div>{post.title}</div>
          <time>
            <Small display="block">{date}</Small>
          </time>
        </PlainLink>
      </div>
      <style jsx>{`
        .post-link {
          display: block;
          margin-bottom: ${Atoms.spacing.medium};
        }
      `}</style>
    </>
  )
}

export default PostLink
