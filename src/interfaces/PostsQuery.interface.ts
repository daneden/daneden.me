import { EdgeNode } from "./EdgeNode.interface"

type Layout = "post"

interface Post {
  date: string
  layout: Layout
  title: string
}

export interface PostsQueryData {
  allMdx: {
    edges?: [EdgeNode<Post>]
  }
}
