import Layout from "@/components/Layout"
import PostLink from "@/components/PostLink"
import { PlainList } from "@/designSystem"
import blogPosts from "@/utils/mdxUtils"
import { generateOgImages } from "@/utils/ogImage"
import { ReactElement } from "react"
export default function Blog(): ReactElement<typeof Layout> {
  return (
    <Layout frontMatter={{ title: "Blog" }}>
      <PlainList>
        {blogPosts.map((post) => {
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
  await generateOgImages(blogPosts)

  return {
    props: {},
  }
}
