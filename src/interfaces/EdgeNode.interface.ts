export interface EdgeNode<Type> {
  node: {
    excerpt?: string
    frontmatter: { [Property in keyof Type]: Type[Property] }
    parent: {
      name: string
    }
  }
}
