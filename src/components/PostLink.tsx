import { MDXFrontMatter } from "*.mdx"
import PlainLink from "@/components/PlainLink"
import formatDate from "@/utils/formatDate"
import widont from "@/utils/widont"
import { ReactElement } from "react"

interface Props {
  post: MDXFrontMatter
}

const PostLink = ({ post }: Props): ReactElement<HTMLDivElement> => {
  const date = formatDate(post.date)

  return (
    <>
      <p className="post-link">
        <PlainLink className="post-link" href={`/blog/${post.slug}`}>
          <span className="post-title">{widont(post.title)}</span>
          <time className="small meta">{date}</time>
        </PlainLink>
      </p>
      <style jsx>{`
        .post-title {
          display: block;
        }

        .post-link {
          line-height: 1.25;
        }
      `}</style>
    </>
  )
}

export default PostLink
