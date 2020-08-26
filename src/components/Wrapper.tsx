import { ReactNode } from "react"
import { Atoms } from "./designSystem"

interface WrapperProps {
  id?: string
  children: ReactNode[]
}

export default function Wrapper({ id = "content", children }: WrapperProps) {
  return (
    <>
      <div id={id} role="region" tabIndex={-1}>
        {children}
      </div>
      <style jsx>{`
        div {
          box-sizing: initial;
          margin: 0 auto;
          max-width: ${Atoms.widths.container};
        }

        div:focus {
          outline: none;
        }
      `}</style>
    </>
  )
}
