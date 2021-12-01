import { useRouter } from "next/router"
import React from "react"
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
          display: grid;
          grid-template-columns: var(--grid-spec);
          grid-gap: var(--sp-xs);
          flex-wrap: wrap;
          margin-bottom: var(--sp-s);
        }

        nav :global(ul) {
          display: flex;
          gap: var(--sp-s);
        }

        @media (max-width: 64em) {
          header > :global(*) {
            grid-column: var(--center-column);
          }
        }
      `}</style>
    </>
  )
}

export default Header
