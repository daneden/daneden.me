import cxs from "cxs/component"
import { Atoms } from "."

export default cxs("h2")({
  fontSize: Atoms.font.size.h2,
  fontWeight: 400,
  hyphens: "initial",
  letterSpacing: "-0.025em",
  marginBottom: Atoms.spacing.medium,
  paddingTop: Atoms.spacing.small,
})
