import { graphql, useStaticQuery } from "gatsby"

const useLayoutQuery = () => {
  const { site } = useStaticQuery(graphql`
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
