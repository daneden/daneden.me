import { MDXFrontMatter } from "*.mdx"
import formatDate from "@/utils/formatDate"
import widont from "@/utils/widont"
import { ReactElement } from "react"
import Atoms from "@/components/designSystem/atoms"
import PlainLink from "@/components/PlainLink"

interface Props {
  post: MDXFrontMatter
}

const PostLink = ({ post }: Props): ReactElement<HTMLDivElement> => {
  const date = formatDate(post.date)

  return (
    <>
      <div className="post-link">
        <PlainLink href={`blog/${post.slug}`}>
          <div>{widont(post.title)}</div>
          <time className="small meta">{date}</time>
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
