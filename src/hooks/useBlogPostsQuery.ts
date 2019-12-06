import { graphql, useStaticQuery } from 'gatsby'
import { EdgeNode } from '../interfaces/EdgeNode.interface'

type Layout = 'post'

interface Post {
  date: string
  layout: Layout
  title: string
}

interface PostsQueryData {
  allMdx: {
    edges?: [EdgeNode<Post>]
  }
}

const useBlogPostsQuery = (): PostsQueryData => {
  const { allMdx }: PostsQueryData = useStaticQuery(graphql`
    query {
      allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            parent {
              ... on File {
                name
              }
            }
            frontmatter {
              title
              date(formatString: "dddd, MMMM Do YYYY")
            }
          }
        }
      }
    }
  `)
  return { allMdx }
}

export default useBlogPostsQuery
