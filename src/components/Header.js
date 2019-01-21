import React from "react"
import styled from "@emotion/styled"

import Atoms from "designSystem/atoms"
import PlainList from "designSystem/PlainList"
import PlainLink from "designSystem/PlainLink"

const StyledHeader = styled("header")`
  font-family: ${Atoms.font.family.sans};
  font-size: ${Atoms.font.size.small};
  border-bottom: 1px solid;
  display: flex;
  justify-content: space-between;
  margin-bottom: ${Atoms.spacing.medium};
  padding-top: ${Atoms.spacing.medium};
`

const StyledNav = styled("nav")`
  li + li {
    margin-left: ${Atoms.spacing.xsmall};
  }
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
    <PlainLink to="/">{siteTitle}</PlainLink>

    <StyledNav>
      <PlainList inline={true}>
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
