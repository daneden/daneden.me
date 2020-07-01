declare module "*.mdx" {
  export interface MDXPost {
    __resourcePath: string
    title: string
    date: string | Date
    hidden?: boolean
    layout?: "post" | "default"
    excerpt?: string
    categories?: [string]
    slug?: string
  }

  let MDXComponent: (props: { [key: string]: unknown }) => JSX.Element
  export const frontMatter: MDXPost | MDXPost[]
  export default MDXComponent
}
