import { useRouter } from "next/router"
import React from "react"
import Atoms from "./designSystem/atoms"
import PlainLink from "./PlainLink"
import PlainList from "./PlainList"

interface HeaderProps {
  siteTitle: string
}

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
    to: "/playlist",
    label: "Playlist",
  },
]

const Header = ({ siteTitle }: HeaderProps) => {
  const location = useRouter().pathname

  return (
    <>
      <header>
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
      </header>
      <style jsx>{`
        header {
          border-bottom: 1px solid;
          display: grid;
          grid-template-columns: var(--grid-spec);
          grid-gap: ${Atoms.spacing.xsmall};
          flex-wrap: wrap;
          margin-bottom: ${Atoms.spacing.small};
          padding-top: ${Atoms.spacing.small};
        }

        li {
          display: inline-block;
          margin-right: 1em;
        }

        @media (max-width: ${Atoms.breakpoints.medium}) {
          header {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  )
}

export default Header
