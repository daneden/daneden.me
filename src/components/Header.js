import React from "react"
import styled from "@emotion/styled"

import Atoms from "designSystem/atoms"
import PlainList from "designSystem/PlainList"
import PlainLink from "designSystem/PlainLink"

const StyledHeader = styled("header")`
  border-bottom: 1px solid;
  display: flex;
  flex-wrap: wrap;

  margin-bottom: ${Atoms.spacing.xlarge};
  padding-top: ${Atoms.spacing.xsmall};
`

const StyledNav = styled("nav")`
  flex-shrink: 0;
`

const HomeLink = styled(PlainLink)`
  flex-basis: calc((100vw - ${Atoms.widths.page}) / 2);
  flex-shrink: 1;
`

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
  <StyledHeader>
    <HomeLink to="/">{siteTitle}</HomeLink>

    <StyledNav>
      <PlainList>
        {links.map(({ to, label }) => (
          <li key={to}>
            <PlainLink to={to}>{label}</PlainLink>
          </li>
        ))}
      </PlainList>
    </StyledNav>
  </StyledHeader>
)

export default Header
