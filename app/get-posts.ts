import postsData from "./posts.json"

export type Post = {
  id: string
  date: string
  title: string
  excerpt: string
  slug: string
  hidden?: boolean
}

export const getPosts = () => {
  return postsData.posts.map((post) => ({
    ...post,
    slug: `${new Date(post.date).getFullYear()}/${post.id}`,
  })) as Post[]
}
