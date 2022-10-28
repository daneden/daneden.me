import PlainLink from "./PlainLink"

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
  return (
    <>
      <header className="site-header">
        <PlainLink href="/">{siteTitle}</PlainLink>

        <nav>
          <ul className="plainlist">
            {links.map(({ to, label }) => (
              <li key={to}>
                <PlainLink href={to}>{label}</PlainLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header
