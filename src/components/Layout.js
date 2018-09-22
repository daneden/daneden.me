import React from "react"
import Helmet from "react-helmet"
import { css } from "react-emotion"

import svgmask from "../../static/images/svgmask.svg"
import favicon from "../../static/images/favicon.png"

import { Atoms, DesignSystemProvider } from "./designSystem/designSystem"
import Footer from "./Footer"
import Header from "./Header"
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
          font-size: ${Atoms.spacing.small};
          margin-bottom: var(--baseline);
          max-width: 36rem;
          text-indent: 0;

          @media (max-width: ${Atoms.breakpoints.medium}) {
            font-size: 1rem;
          }
        }
      `
    : baseStyle
}

export default function Layout({ children, location, ...props }) {
  const isFrontPage = location.pathname === "/"

  return (
    <SiteMetadataQuery
      render={data => (
        <DesignSystemProvider isFrontPage={isFrontPage}>
          <React.Fragment>
            <Helmet
              defaultTitle={data.site.siteMetadata.title}
              titleTemplate={`%s | ${data.site.siteMetadata.title}`}
            >
              <link rel="icon" href={favicon} />
              <link rel="mask-icon" href={svgmask} color={Atoms.colors.text} />
              <body className={bodyStyles({ isFrontPage })} />
            </Helmet>
            <Wrapper isConstrained={!isFrontPage}>
              <Header siteTitle={data.site.siteMetadata.title} />
              {children}
              <Footer author={data.site.siteMetadata.authorName} />
            </Wrapper>
          </React.Fragment>
        </DesignSystemProvider>
      )}
    />
  )
}
