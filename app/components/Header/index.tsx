import Link from "next/link"
import styles from "./styles.module.css"

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

const Header = () => {
  return (
    <>
      <header className={styles.root}>
        <Link className="plainlink" href="/">
          Daniel Eden, Designer
        </Link>

        <nav>
          <ul className="plainlist">
            {links.map(({ to, label }) => (
              <li key={to}>
                <Link className="plainlink" href={to}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header
