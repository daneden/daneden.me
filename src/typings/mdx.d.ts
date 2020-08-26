declare module "*.mdx" {
  export interface MDXFrontMatter {
    __resourcePath: string
    title: string
    date?: string
    hidden?: boolean
    layout?: "post" | "default"
    excerpt?: string
    categories?: [string]
    slug?: string
    ogSlug?: string
  }

  export interface MDXFile {
    frontMatter: MDXFrontMatter
    content: string
    path: string
  }

  let MDXComponent: (props: { [key: string]: unknown }) => JSX.Element
  export const frontMatter: MDXFrontMatter | MDXFrontMatter[]
  export default MDXComponent
}
