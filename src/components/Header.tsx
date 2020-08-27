import * as Fathom from "fathom-client"
import { useRouter } from "next/router"
import React from "react"
import Atoms from "./designSystem/atoms"
import PlainLink from "./designSystem/PlainLink"
import PlainList from "./designSystem/PlainList"

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
    to: "/books",
    label: "Library",
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
                <PlainLink
                  href={to}
                  onClick={() => {
                    Fathom.trackGoal("QSDYWCAL", 0)
                  }}
                >
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
          grid-template-columns:
            calc(${Atoms.widths.content} - ${Atoms.spacing.xsmall})
            1fr;
          grid-gap: ${Atoms.spacing.xsmall};
          flex-wrap: wrap;
          margin-bottom: ${Atoms.spacing.small};
          padding-top: ${Atoms.spacing.small};
        }

        @media (max-width: ${Atoms.breakpoints.medium}) {
          header {
            grid-template-columns: 1fr;
          }

          li {
            display: inline-block;
            margin-right: 1em;
          }
        }
      `}</style>
    </>
  )
}

export default Header
