import React from 'react'
import { Link } from 'gatsby'

const NavLink = ({to, label}) => (
  <Link
    className="plainlink"
    to={to}
  >
    {label}
  </Link>
)

const links = [
  {
    to: "/blog",
    label: "Blog",
  },
  {
    to: "/portfolio",
    label: "Portfolio",
  },
  {
    to: "/books",
    label: "Library",
  },
]

const Header = ({ siteTitle }) => (
  <header className="sans site__header">
    <Link className="site__title plainlink" to="/" >
      {siteTitle}
    </Link>

    <nav className="site__nav">
      <ul className="nav">
        {links.map(({to, label}) => <li key={to}>
          <NavLink to={to} label={label} />
        </li>)}
      </ul>
    </nav>
  </header>
)

export default Header
