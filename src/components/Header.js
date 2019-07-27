import styled from "@emotion/styled"
import Atoms from "designSystem/atoms"
import PlainLink from "designSystem/PlainLink"
import PlainList from "designSystem/PlainList"
import React from "react"

const StyledHeader = styled("header")`
  border-bottom: 1px solid;
  display: grid;
  grid-template-columns: calc(${Atoms.widths.content} - ${Atoms.spacing.medium}) 1fr;
  grid-gap: ${Atoms.spacing.medium};
  flex-wrap: wrap;

  margin-bottom: ${Atoms.spacing.small};
  padding-top: ${Atoms.spacing.xsmall};

  @media (max-width: ${Atoms.breakpoints.narrow}) {
    grid-template-columns: 1fr 1fr;
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

const Header = ({ path, siteTitle }) => (
  <StyledHeader>
    <PlainLink to="/">{siteTitle}</PlainLink>

    <nav>
      <PlainList>
        {links.map(({ to, label }) => (
          <li key={to}>
            <PlainLink to={to}>
              {label}
              {path.includes(to) ? " ☚" : ""}
            </PlainLink>
          </li>
        ))}
      </PlainList>
    </nav>
  </StyledHeader>
)

export default Header
