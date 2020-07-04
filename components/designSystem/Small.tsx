import cxs from "cxs/component"
import { Atoms } from "."
import * as React from "react"

type DisplayType = "block" | "inline-block"

interface Props {
  receded?: boolean
  display?: DisplayType
  children: React.ReactNode
}

export default cxs<"small", Props>("small")(
  ({ display = "inline-block", receded }: Props) => ({
    fontSize: Atoms.font.size.small,
    letterSpacing: "0.025em",
    lineHeight: Atoms.baseline,
    display,
    color: receded ? "var(--meta-color)" : "inherit",
  })
)
