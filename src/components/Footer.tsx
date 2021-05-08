import Link from "next/link"

export default function Footer() {
  return (
    <>
      <footer>
        <div className="wrapper small">
          Written, designed, and built by Daniel Eden, a designer who you can
          find on <Link href="https://twitter.com/_dte">Twitter</Link>,{" "}
          <Link href="https://github.com/daneden">GitHub</Link>, or good
          old-fashioned <Link href="mailto:dan.eden@me.com">Email</Link>.
        </div>
      </footer>
      <style jsx>{`
        footer {
          border-top: 1px solid;
          margin-top: var(--sp-l);
          padding-bottom: var(--sp-l);
          padding-top: var(--sp-s);
          color: var(--meta-color);
          display: grid;
          grid-template-columns: var(--grid-spec);
        }

        .wrapper {
          grid-column: 2 / 3;
        }
      `}</style>
    </>
  )
}
