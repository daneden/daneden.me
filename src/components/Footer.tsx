import Link from "next/link"

export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer-wrapper small">
          Written, designed, and built by Daniel Eden, a designer who you can
          find on <Link href="https://twitter.com/_dte">Twitter</Link>,{" "}
          <Link rel="me" href="https://mastodon.online/@dte">
            Mastodon
          </Link>
          , <Link href="https://github.com/daneden">GitHub</Link>, or good
          old-fashioned <Link href="mailto:dan.eden@me.com">Email</Link>.
        </div>
      </footer>
      <style>{`
        footer {
          border-top: 1px solid;
          margin-top: var(--sp-l);
          padding-bottom: var(--sp-l);
          padding-top: var(--sp-s);
          color: var(--meta-color);
          display: grid;
          grid-template-columns: var(--grid-spec);
        }

        footer .footer-wrapper {
          grid-column: var(--center-column);
        }
      `}</style>
    </>
  )
}
