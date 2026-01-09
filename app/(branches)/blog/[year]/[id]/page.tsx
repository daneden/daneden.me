import { getPosts } from "@/app/get-posts"

export type Params = Promise<{ year: string; id: string }>

export default async function Page({
  params,
}: {
  params: Params
}) {
  const { year, id } = await params
  const { default: Post } = await import(`@/content/${year}/${id}/page.mdx`)
 
  return <Post />
}
 
export async function generateStaticParams() {
  const posts = getPosts()
  return posts.map((post) => ({
    year: post.slug.split("/")[0],
    id: post.id,
  }))
}
 
export const dynamicParams = false