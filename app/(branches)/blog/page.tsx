import formatDate from "@/utils/formatDate"
import { client } from "@/utils/graphql-client"
import { gql } from "graphql-request"
import Link from "next/link"
import { cache } from "react"

export const runtime = "edge"

export const metadata = {
  title: "Blog",
  description: "Daniel Eden’s Blog",
}

const allVisiblePosts = cache(async function allVisiblePosts() {
  return await client.request<{ posts: Post[] }>(gql`
    query {
      posts(orderBy: date_DESC, where: { hidden: false }, first: 100) {
        slug
        title
        date
      }
    }
  `)
})

export default async function Blog() {
  const { posts } = await allVisiblePosts()

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
