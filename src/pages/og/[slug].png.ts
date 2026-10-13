import opengraphImage from "@/utils/opengraphImage"
import type { APIRoute, GetStaticPaths } from "astro"
import { getCollection } from "astro:content"

export const getStaticPaths = (async () => {
  const posts = await getCollection("posts")
  return [
    { params: { slug: "default" }, props: { title: undefined } },
    ...posts.map((post) => ({
      params: { slug: post.id.split("/")[1] },
      props: { title: post.data.title },
    })),
  ]
}) satisfies GetStaticPaths

export const GET: APIRoute = async ({ props }) => {
  const png = await opengraphImage(props.title)
  return new Response(new Uint8Array(png), { headers: { "Content-Type": "image/png" } })
}
