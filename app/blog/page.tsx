import { gql } from "graphql-request"
import Link from "next/link"
import { Post } from "./[slug]/page"

export default async function Blog() {
  const {
    data: { blogPosts: posts },
  } = await fetch(
    "https://api-eu-central-1.hygraph.com/v2/ckj905f88c5cc01z5gqb26m13/master",
    {
      method: "POST",
      body: JSON.stringify({
        query: gql`
          query BlogPosts {
            blogPosts(orderBy: date_DESC) {
              date
              slug
              title
            }
          }
        `,
      }),
    }
  ).then((d) => d.json())

  return (
    <>
      <h1>Blog</h1>
      <ul className="plainlist">
        {posts.map((post: Post) => {
          return (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}
