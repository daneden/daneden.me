import React from 'react'
import Helmet from 'react-helmet'
import { graphql, StaticQuery } from 'gatsby'

import Header from './Header'
import Footer from './Footer'
import Wrapper from './Wrapper'

export default function BlogPost({children, pageContext }) {
  const { title, date } = pageContext
  return <StaticQuery
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
          <body className='phl' />
        </Helmet>
        <Wrapper>
          <Header siteTitle={data.site.siteMetadata.title} />
          <main className="mxl">
            <header className="mxl">
              <h1>{title}</h1>
              <p className="hide">{date}</p>
            </header>
            {children}
          </main>
          <Footer author={data.site.siteMetadata.authorName} />
        </Wrapper>
      </React.Fragment>
    )}
  />
}
