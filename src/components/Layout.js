import React from "react"
import Helmet from "react-helmet"
import { MDXProvider } from "@mdx-js/tag"
import { css } from "react-emotion"

import Atoms from "./designSystem/atoms"
import Footer from "./Footer"
import Header from "./Header"
import Link from "./Link"
import SiteMetadataQuery from "../queries/SiteMetadataQuery"
import Wrapper from "./Wrapper"

const bodyStyles = props => {
  const baseStyle = css`
    background-color: ${props.isFrontPage
      ? Atoms.colors.text
      : Atoms.colors.wash};
    color: ${!props.isFrontPage ? Atoms.colors.text : Atoms.colors.wash};
    flex: 1;
    padding-left: ${Atoms.spacing.medium};
    padding-right: ${Atoms.spacing.medium};
  `
  return props.isFrontPage
    ? css`
        ${baseStyle};
        p {
          max-width: 36rem;
          text-indent: 0;
          margin-bottom: var(--baseline);
        }
      `
    : baseStyle
}

export default function Layout({ children, location }) {
  const isFrontPage = location.pathname === "/"

  return (
    <SiteMetadataQuery
      render={data => (
        <MDXProvider
          components={{
            a: props => (
              <Link
                to={props.href}
                title={props.title}
                children={props.children}
              />
            ),
          }}
        >
          <React.Fragment>
            <Helmet
              defaultTitle={data.site.siteMetadata.title}
              titleTemplate={`%s | ${data.site.siteMetadata.title}`}
            >
              <body className={bodyStyles({ isFrontPage })} />
            </Helmet>
            <Wrapper isConstrained={!isFrontPage}>
              <Header siteTitle={data.site.siteMetadata.title} />
              <main className="mxl">{children}</main>
              <Footer author={data.site.siteMetadata.authorName} />
            </Wrapper>
          </React.Fragment>
        </MDXProvider>
      )}
    />
  )
}
