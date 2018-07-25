import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Wrapper from '../components/Wrapper'

import './css/style.css'
import '../fonts/fonts.css'

const QUERY = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        authorName
      }
    }
  }
`

const Content = ({ isFrontpage, children }) => {
  if(isFrontpage) {
    return <Wrapper>
      {children}
    </Wrapper>
  }

  return children
}

const Layout = ({ children, location }) => {
  const pageClass = location.pathname === '/'
    ? 'frontpage'
    : ''

  return (
    <StaticQuery
      query={QUERY}
      render={data => (
        <React.Fragment>
          <Helmet
            defaultTitle={data.site.siteMetadata.title}
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
          >
            <body
              className={[
                pageClass,
                'phl',
              ].join(' ')}
            />
          </Helmet>
          <Content isFrontpage={pageClass !== 'frontpage'}>
            <Header siteTitle={data.site.siteMetadata.title} />
            {children}
            <Footer author={data.site.siteMetadata.authorName} />
          </Content>
        </React.Fragment>
      )}
    />
  )
}

export default Layout

