import cxs from "cxs/component"
import { Atoms } from "."

type DisplayType = "block" | "inline-block"

interface Props {
  receded?: boolean
  display?: DisplayType
  as?: React.ElementType
}
export default cxs("small")<Props>(({ display = "inline-block", receded }) => ({
  fontSize: Atoms.font.size.small,
  letterSpacing: "0.025em",
  lineHeight: Atoms.baseline,
  display,
  color: receded ? "var(--meta-color)" : "inherit",
}))
