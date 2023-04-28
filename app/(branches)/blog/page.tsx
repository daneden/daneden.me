import formatDate from "@/utils/formatDate"
import { getPosts } from "@/utils/mdx/sources"
import Link from "next/link"

export const metadata = {
  title: "Blog",
  description: "Daniel Eden’s Blog",
}

export default async function Blog() {
  const posts = await getPosts()

  return (
    <>
      <h1>Blog</h1>
      <ul className="plainlist post-list">
        {posts.map((post) => {
          if (post && post.frontMatter !== null) {
            return (
              <li className="post-list-item" key={post.slug}>
                <Link className="plainlink" href={`/blog/${post.slug}`}>
                  <span>{post.frontMatter.title}</span>
                  <br />
                  <span className="sans meta small">
                    {formatDate(post.frontMatter.date)}
                  </span>
                </Link>
              </li>
            )
          }
        })}
      </ul>
    </>
  )
}
