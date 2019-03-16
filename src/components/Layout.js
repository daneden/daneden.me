import React from "react"
import Helmet from "react-helmet"
import { Global } from "@emotion/core"

import svgmask from "../../static/images/svgmask.svg"
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
              body: {
                backgroundColor: Atoms.colors.wash,
                color: Atoms.colors.text,
                flex: 1,
                paddingLeft: Atoms.spacing.medium,
                paddingRight: Atoms.spacing.medium,
              },
            }}
          />
          <React.Fragment>
            <Helmet>
              <link rel="icon" href={favicon} />
              <link rel="mask-icon" href={svgmask} color={Atoms.colors.text} />
            </Helmet>
            <Metatags
              defaultTitle={data.site.siteMetadata.title}
              title={title !== null ? title : data.site.siteMetadata.title}
              description={data.site.siteMetadata.description}
              thumbnail={"/uploads/2019/01/og.png"}
            />
            <Wrapper>
              <Header siteTitle={data.site.siteMetadata.title} />
              <main>{children}</main>
              <Footer author={data.site.siteMetadata.authorName} />
            </Wrapper>
          </React.Fragment>
        </DesignSystemProvider>
      )}
    />
  )
}
