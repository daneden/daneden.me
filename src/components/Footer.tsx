import { Atoms, Link, Small } from "./designSystem"

export default function Footer() {
  return (
    <>
      <footer>
        <div className="wrapper">
          <Small display="block">
            Written, designed, and built by Daniel Eden, a designer who you can
            find on <Link href="https://twitter.com/_dte">Twitter</Link>,{" "}
            <Link href="https://github.com/daneden">GitHub</Link>, or good
            old-fashioned <Link href="mailto:dan.eden@me.com">Email</Link>.
          </Small>
        </div>
      </footer>
      <style jsx>{`
        footer {
          border-top: 1px solid;
          font-family: ${Atoms.font.family.body};
          margin-top: ${Atoms.spacing.large};
          padding-bottom: ${Atoms.spacing.large};
          padding-top: ${Atoms.spacing.small};
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
