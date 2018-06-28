import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Wrapper from '../components/Wrapper'

import './css/style.css'
import '../fonts/fonts.css'

const Content = ({ isFrontpage, children }) => {
  if(isFrontpage) {
    return <Wrapper className="mxl">
      {children}
    </Wrapper>
  }

  return children
}

const Layout = ({ children, data, location }) => {
  const pageClass = location.pathname === '/'
    ? 'frontpage'
    : ''

  const content = children()

  return (
    <React.Fragment>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
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
        {content}
        <Footer author={data.site.siteMetadata.authorName} />
      </Content>
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        authorName
      }
    }
  }
`
