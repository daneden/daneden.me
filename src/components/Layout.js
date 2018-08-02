import React from "react"
import Helmet from "react-helmet"
import { graphql, StaticQuery } from "gatsby"

import Header from "./Header"
import Footer from "./Footer"
import Wrapper from "./Wrapper"

import "./css/style.css"
import "../fonts/fonts.css"

const PostHeader = ({ title, date }) => (
  <header className="">
    <h1>{title}</h1>
    <p className="hide">{date}</p>
  </header>
)

export default function Layout({ children, location, pageContext }) {
  const { title, date } = pageContext
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
        <React.Fragment>
          <Helmet
            title={title}
            defaultTitle={data.site.siteMetadata.title}
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
          >
            <body className={`phl ${pageClass}`} />
          </Helmet>
          <Wrapper isConstrained={pageClass == null}>
            <Header siteTitle={data.site.siteMetadata.title} />
            <main className="mxl">
              {title !== undefined ? (
                <PostHeader title={title} date={date} />
              ) : null}
              {children}
            </main>
            <Footer author={data.site.siteMetadata.authorName} />
          </Wrapper>
        </React.Fragment>
      )}
    />
  )
}
