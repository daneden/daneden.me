import formatDate from "@/utils/formatDate"
import { allPosts } from "contentlayer/generated"
import Link from "next/link"

export const metadata = {
  title: "Blog",
  description: "Daniel Eden’s Blog",
}

export default async function Blog() {
  return (
    <>
      <h1>Blog</h1>
      <ul className="plainlist post-list">
        {allPosts
          .filter((post) => !post.hidden)
          .sort((lhs, rhs) => rhs.date.localeCompare(lhs.date))
          .map((post) => {
            return (
              <li className="post-list-item" key={post.url}>
                <Link className="plainlink" href={post.url}>
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
