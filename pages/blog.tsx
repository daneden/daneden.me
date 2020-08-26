import { MDXFrontMatter } from "*.mdx"
import Layout from "@/components/Layout"
import PostLink from "@/components/PostLink"
import { PlainList } from "@/designSystem"
import blogPosts from "@/utils/mdxUtils"
import { ReactElement } from "react"
export default function Blog({
  posts,
}: {
  posts: MDXFrontMatter[]
}): ReactElement<typeof Layout> {
  return (
    <Layout frontMatter={{ title: "Blog" }}>
      <PlainList>
        {posts.map((post) => {
          return (
            <li key={post.slug}>
              <PostLink post={post} />
            </li>
          )
        })}
      </PlainList>
    </Layout>
  )
}

export async function getStaticProps() {
  const posts = Array.from(blogPosts.values())
    .map((post) => post.frontMatter)
    .sort((a, b) => {
      return Number(new Date(b.date || "")) - Number(new Date(a.date || ""))
    })
    .filter((post) => !post.hidden)

  return {
    props: { posts },
  }
}
