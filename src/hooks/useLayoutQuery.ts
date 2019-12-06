import { graphql, useStaticQuery } from "gatsby"

interface Site {
  siteMetadata: {
    authorName: string
    description: string
    siteUrl: string
    title: string
  }
}

interface LayoutQueryData {
  site: Site
}

const useLayoutQuery = () => {
  const { site }: LayoutQueryData = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          authorName
          description
          siteUrl
        }
      }
    }
  `)
  return { site }
}

export default useLayoutQuery
