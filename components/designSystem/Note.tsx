import cxs from "cxs/component"
import { Atoms } from "."

export default cxs("aside")({
  backgroundColor: Atoms.colors.mark,
  borderLeft: `2px solid ${Atoms.colors.highlight}`,
  color: "inherit",
  marginBottom: Atoms.spacing.medium,
  padding: Atoms.spacing.small,
})
