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

export default function Header({
  activeSegments = [],
}: {
  activeSegments: string[]
}) {
  console.log(activeSegments)
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
                <Link
                  className={`plainlink ${
                    activeSegments.includes(to.split("/")[1])
                      ? styles.activeSegment
                      : ""
                  }`}
                  href={to}
                >
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
