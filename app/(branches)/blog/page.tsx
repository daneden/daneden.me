import { getPosts } from "@/app/get-posts"
import formatDate from "@/utils/formatDate"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Blog",
  description: "Daniel Eden’s Blog",
}

export default function Blog() {
  const posts = getPosts()

  return (
    <>
      <h1>Blog</h1>
      <ul className="plainlist post-list">
        {posts
          .filter((post) => !post.hidden)
          .sort((lhs, rhs) => rhs.date.localeCompare(lhs.date))
          .map((post) => {
            return (
              <li className="post-list-item" key={post.slug}>
                <Link className="plainlink" href={`/blog/${post.slug}`}>
                  <span>{post.title}</span>
                  <br />
                  <span className="sans meta small">
                    {formatDate(post.date)}
                  </span>
                </Link>
              </li>
            )
          })}
      </ul>
    </>
  )
}
