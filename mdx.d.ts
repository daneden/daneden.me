declare module "*.mdx" {
  export interface MDXPost {
    __resourcePath: string
    title: string
    date: string
    hidden?: boolean
    layout?: "post" | "default"
    excerpt?: string
  }

  let MDXComponent: (props: any) => JSX.Element
  export const frontMatter: MDXPost | MDXPost[]
  export default MDXComponent
}
