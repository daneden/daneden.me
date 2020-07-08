import cxs from "cxs/component"
import { Atoms } from "."

export const codeStyle = {
  padding: "0.1em 0.25em",
  verticalAlign: "baseline",
  backgroundColor: "rgba(0, 0, 0, 0.05)",
  borderRadius: "0.35em",
  fontFamily: Atoms.font.family.mono,
  fontSize: "0.875em",
  lineHeight: 1,
  letterSpacing: "-0.025em",
}

export default cxs("code")(codeStyle)
