import { Post } from "@/utils/mdx/sources"
import { GetServerSidePropsContext } from "next"

const { VERCEL_URL } = process.env

async function generateSiteMap() {
  const posts = await Post.getAllMdxNodes()
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     <url>
       <loc>https://${VERCEL_URL}</loc>
     </url>
     <url>
       <loc>https://${VERCEL_URL}/blog</loc>
     </url>
     <url>
       <loc>https://${VERCEL_URL}/portfolio</loc>
     </url>
     <url>
       <loc>https://${VERCEL_URL}/playlist</loc>
     </url>
     ${posts
       .map((post) => {
         return `
       <url>
           <loc>https://${VERCEL_URL}/blog/${post?.slug ?? ""}</loc>
       </url>
     `
       })
       .join("")}
   </urlset>
 `
}

function SiteMap() {}

export async function getServerSideProps({ res }: GetServerSidePropsContext) {
  const sitemap = await generateSiteMap()

  res.setHeader("Content-Type", "text/xml")
  res.write(sitemap)
  res.end()

  return {
    props: {},
  }
}

export default SiteMap
