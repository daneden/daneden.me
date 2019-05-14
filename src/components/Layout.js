import React from "react"
import Helmet from "react-helmet"
import { Global } from "@emotion/core"

import favicon from "../../static/images/favicon.png"

import { Atoms } from "designSystem/designSystem"
import DesignSystemProvider from "designSystem/DesignSystemProvider"
import Footer from "./Footer"
import Header from "./Header"
import SiteMetadataQuery from "queries/SiteMetadataQuery"
import Wrapper from "./Wrapper"
import Metatags from "./Metatags"

export default function Layout({ children, location, ...props }) {
  const title =
    props.pageContext.frontmatter !== undefined
      ? props.pageContext.frontmatter.title
      : null

  return (
    <SiteMetadataQuery
      render={data => (
        <DesignSystemProvider>
          <Global
            styles={{
              "*": {
                boxSizing: "border-box",
                margin: 0,
                padding: 0,
              },

              html: {
                backgroundColor: Atoms.colors.wash,
                color: Atoms.colors.text,
                flex: 1,
                fontFamily: Atoms.font.family.sans,
                fontSize: "125%",
                lineHeight: Atoms.baseline,
                paddingLeft: Atoms.spacing.medium,
                paddingRight: Atoms.spacing.medium,

                "@media (prefers-color-scheme: dark)": {
                  color: Atoms.colors.wash,
                  backgroundColor: Atoms.colors.text,
                },

                [`@media (max-width: ${Atoms.breakpoints.medium})`]: {
                  fontSize: "100%",
                },
              },

              "ul, ol": {
                marginBottom: Atoms.spacing.medium,
              },
            }}
          />
          <React.Fragment>
            <Helmet>
              <link rel="icon" href={favicon} />
            </Helmet>
            <Metatags
              defaultTitle={data.site.siteMetadata.title}
              title={title !== null ? title : data.site.siteMetadata.title}
              description={data.site.siteMetadata.description}
              thumbnail={`${
                data.site.siteMetadata.siteUrl
              }/uploads/2019/01/og.png`}
            />
            <Header
              siteTitle={data.site.siteMetadata.title}
              path={location.pathname}
            />
            <Wrapper>{children}</Wrapper>
            <Footer author={data.site.siteMetadata.authorName} />
          </React.Fragment>
        </DesignSystemProvider>
      )}
    />
  )
}
