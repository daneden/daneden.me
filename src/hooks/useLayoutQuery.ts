import { graphql, useStaticQuery } from "gatsby"
import { LayoutQueryData } from "../interfaces/LayoutQuery.interface"

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
