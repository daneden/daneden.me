import React from "react"
import Helmet from "react-helmet"
import { MDXProvider } from "@mdx-js/tag"
import { graphql, StaticQuery } from "gatsby"

import Footer from "./Footer"
import Header from "./Header"
import Link from "./Link"
import Wrapper from "./Wrapper"

export default function Layout({ children, location }) {
  const pageClass = location.pathname === "/" ? "frontpage" : null

  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
              authorName
            }
          }
        }
      `}
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
          <Helmet
            defaultTitle={data.site.siteMetadata.title}
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
          >
            <body className={`phl ${pageClass}`} />
          </Helmet>
          <Wrapper isConstrained={pageClass == null}>
            <Header siteTitle={data.site.siteMetadata.title} />
            <main className="mxl">{children}</main>
            <Footer author={data.site.siteMetadata.authorName} />
          </Wrapper>
        </MDXProvider>
      )}
    />
  )
}
