import { ReactNode } from "react"

interface WrapperProps {
  id?: string
  children: ReactNode[]
}

export default function Wrapper({ id = "content", children }: WrapperProps) {
  return (
    <>
      <div id={id} role="region" tabIndex={-1}>
        <main>{children}</main>
      </div>
      <style jsx>{`
        div {
          display: grid;
          grid-gap: var(--sp-m);
          grid-template-columns: var(--grid-spec);
          flex-grow: 1;
        }

        div:focus {
          outline: none;
        }

        main {
          grid-column: var(--center-column);
          position: relative;
        }

        @media (min-width: 1388px) {
          main :global(.footnotes) {
            position: relative;
          }

          main :global(.footnotes > *) {
            margin: 0;
            padding: 0;
          }

          main :global(.footnotes > hr) {
            display: none;
          }

          main :global(li[id*="fn-"]) {
            position: absolute;
            width: 15rem;
            left: 100%;
            margin-left: var(--sp-xl);
            padding-block: var(--sp-m);
          }

          main :global(li[id*="fn-"]:target) {
            color: var(--text-color);
          }
        }
      `}</style>
    </>
  )
}
