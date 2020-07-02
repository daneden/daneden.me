import cxs from "cxs/component"
import { useRouter } from "next/router"
import React, { ReactElement } from "react"
import Atoms from "./designSystem/atoms"
import PlainLink from "./designSystem/PlainLink"
import PlainList from "./designSystem/PlainList"

interface HeaderProps {
  siteTitle: string
}

const StyledHeader = cxs("header")({
  borderBottom: "1px solid",
  display: "grid",
  gridTemplateColumns: `calc(${Atoms.widths.content} - ${Atoms.spacing.medium}) 1fr`,
  gridGap: Atoms.spacing.medium,
  flexWrap: "wrap",
  marginBottom: Atoms.spacing.small,
  paddingTop: Atoms.spacing.small,
  [`@media (max-width: ${Atoms.breakpoints.medium})`]: {
    gridTemplateColumns: "1fr 1fr",
  },
})

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
                {location.includes(to) ? " ☚" : ""}
              </PlainLink>
            </li>
          ))}
        </PlainList>
      </nav>
    </StyledHeader>
  )
}

export default Header
