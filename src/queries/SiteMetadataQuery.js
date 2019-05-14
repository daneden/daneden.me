import React from "react"
import { graphql, StaticQuery } from "gatsby"

const SiteMetadataQuery = ({ render }) => (
  <StaticQuery
    query={graphql`
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
    `}
    render={data => render(data)}
  />
)

export default SiteMetadataQuery
