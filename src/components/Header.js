import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <header className="sans site__header">
    <Link className="site__title plainlink" to="/" >
      {siteTitle}
    </Link>
  </header>
)

export default Header
