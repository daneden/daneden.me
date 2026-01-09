import { Params, generateStaticParams as generateStaticParamsForPosts } from "./layout"

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
    return await generateStaticParamsForPosts()
}
 
export const dynamicParams = false