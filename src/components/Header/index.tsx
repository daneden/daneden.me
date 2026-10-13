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

export default function Header({ pathname }: { pathname: string }) {
  return (
    <>
      <header className={styles.root}>
        <a className="plainlink" href="/">
          Daniel Eden, Designer
        </a>

        <nav>
          <ul className="plainlist">
            {links.map(({ to, label }) => (
              <li key={to}>
                <a
                  className={`plainlink ${
                    pathname.startsWith(to)
                      ? styles.activeSegment
                      : ""
                  }`}
                  href={to}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  )
}
