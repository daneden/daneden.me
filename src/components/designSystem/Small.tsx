import * as React from "react"
import { Atoms } from "."

type DisplayType = "block" | "inline-block"

interface Props {
  receded?: boolean
  display?: DisplayType
  children: React.ReactNode
}

export default function Small({
  receded = false,
  display = "inline-block",
  children,
}: Props) {
  return (
    <>
      <small>{children}</small>
      <style jsx>{`
        small {
          font-size: ${Atoms.font.size.small};
          letter-spacing: 0.025em;
          line-height: ${Atoms.baseline};
          display: ${display};
        }
      `}</style>
      <style jsx>{`
        small {
          color: ${receded ? "var(--meta-color)" : "inherit"};
        }
      `}</style>
    </>
  )
}
