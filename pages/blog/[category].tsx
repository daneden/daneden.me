import Layout from "@/components/Layout"
import PostLink from "@/components/PostLink"
import { Link, P, PlainList } from "@/designSystem"
import { allCategories, postsForCategory } from "@/utils/mdxUtils"
import { GetStaticPaths, GetStaticProps } from "next"
import { ReactElement } from "react"

export default function TagPage({
  category,
}: {
  category: string
}): ReactElement<typeof Layout> {
  const posts = postsForCategory(category)

  // Capitalise the category
  const formattedCategory = category
    .split("")
    .map((c, i) => (i === 0 ? c.toUpperCase() : c))
    .join("")

  return (
    <Layout
      frontMatter={{
        title: `${posts.length} Blog Post${
          posts.length === 1 ? "" : "s"
        } in “${formattedCategory}”`,
      }}
    >
      {posts.length == 0 && (
        <P>
          No posts in tagged with “{category}” found.{" "}
          <Link href="/blog">Back to the blog</Link>.
        </P>
      )}
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

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params) {
    throw new Error("No parameters passed for getStaticProps in category page")
  }

  const { category } = params
  return {
    props: {
      category,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const categoryPaths = allCategories.map((category) => {
    return {
      params: {
        category,
      },
    }
  })

  return {
    paths: categoryPaths,
    fallback: false,
  }
}
