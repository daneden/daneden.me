import cxs from "cxs"
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
  const className = cxs({
    fontSize: Atoms.font.size.small,
    letterSpacing: "0.025em",
    lineHeight: Atoms.baseline,
    display,
    color: receded ? "var(--meta-color)" : "inherit",
  })

  return <small className={className}>{children}</small>
}
