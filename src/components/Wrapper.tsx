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

        @media (max-width: 50em) {
          div {
            display: block;
          }
        }

        div:focus {
          outline: none;
        }

        main {
          grid-column: 2 / 3;
        }
      `}</style>
    </>
  )
}
