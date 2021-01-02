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
      <p className="post-link">
        <PlainLink className="post-link" href={`blog/${post.slug}`}>
          <div className="post-title">{widont(post.title)}</div>
          <time className="small meta">{date}</time>
        </PlainLink>
      </p>
      <style jsx>{`
        .post-link {
          line-height: 1.25;
        }
      `}</style>
    </>
  )
}

export default PostLink
