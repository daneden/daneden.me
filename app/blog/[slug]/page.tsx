import { gql } from "graphql-request"

export default async function PostPage({
  params: { slug },
}: {
  params: { slug: string }
}) {
  const {
    data: { blogPost: post },
  } = await fetch(
    "https://api-eu-central-1.hygraph.com/v2/ckj905f88c5cc01z5gqb26m13/master",
    {
      method: "POST",
      body: JSON.stringify({
        query: gql`
          query BlogPost($slug: String!) {
            blogPost(where: { slug: $slug }) {
              date
              title
              content
            }
          }
        `,
        variables: {
          slug: decodeURIComponent(slug),
        },
      }),
    }
  ).then((d) => d.json())

  return (
    <>
      <header>
        <h1>{post.title}</h1>
        <time>{post.date}</time>
      </header>
      {post.content}
    </>
  )
}

export async function generateStaticParams() {
  const {
    data: { blogPosts: posts },
  } = await fetch(
    "https://api-eu-central-1.hygraph.com/v2/ckj905f88c5cc01z5gqb26m13/master",
    {
      method: "POST",
      body: JSON.stringify({
        query: gql`
          query BlogPosts {
            blogPosts {
              slug
            }
          }
        `,
      }),
    }
  ).then((d) => d.json())

  return posts.map(({ slug }: Post) => ({
    slug,
  }))
}

export interface Post {
  content: string
  date: string
  slug: string
  title: string
}
