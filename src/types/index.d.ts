declare module "react-imgix"
declare module "react-script-tag"

declare module JSX {
  interface IntrinsicElements {
    stream: StreamElement
  }
}

declare module "@mdx-js/react" {
  type MDXProps = {
    children: React.ReactNode
    components: { [string]: React.ReactNode }
  }
  export class MDXProvider extends React.Component<MDXProps> {}
}
