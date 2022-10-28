import PostLink from "@/components/PostLink"
import blogPosts from "@/utils/mdxUtils"
export default async function Blog() {
  const posts = await getPosts()

  return (
    <>
      <h1>Blog</h1>
      <ul className="plainlist">
        {posts.map((post) => {
          return (
            <li key={post.slug}>
              <PostLink post={post} />
            </li>
          )
        })}
      </ul>
    </>
  )
}

async function getPosts() {
  const posts = Array.from(blogPosts.values())
    .map((post) => post.frontMatter)
    .sort((a, b) => {
      return Number(new Date(b.date || "")) - Number(new Date(a.date || ""))
    })
    .filter((post) => !post.hidden)

  return posts
}
