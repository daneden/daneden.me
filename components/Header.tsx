/** @jsx jsx */
import { jsx } from "@emotion/core"
import styled from "@emotion/styled"
import { useRouter } from "next/router"
import React, { ReactElement } from "react"
import Atoms from "./designSystem/atoms"
import PlainLink from "./designSystem/PlainLink"
import PlainList from "./designSystem/PlainList"

const { useContext } = React

interface HeaderProps {
  siteTitle: string
}

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

const Header = ({
  siteTitle,
}: HeaderProps): ReactElement<typeof StyledHeader> => {
  const blogPostRegex = /[0-9]{4}\/[0-9]{2}\/[0-9]{2}\//
  const location = useRouter().pathname
  return (
    <StyledHeader>
      <PlainLink href="/">{siteTitle}</PlainLink>

      <nav>
        <PlainList>
          {links.map(({ to, label }) => (
            <li key={to}>
              <PlainLink href={to}>
                {label}
                {location.includes(to) ||
                (location.match(blogPostRegex) && to.includes("blog"))
                  ? " ☚"
                  : ""}
              </PlainLink>
            </li>
          ))}
        </PlainList>
      </nav>
    </StyledHeader>
  )
}

export default Header
