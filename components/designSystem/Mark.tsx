import cxs from "cxs/component"
import { Atoms } from "."

export default cxs("mark")({
  backgroundColor: Atoms.colors.mark,
  borderRadius: Atoms.spacing.xxsmall,
  color: "inherit",
  marginLeft: `-${Atoms.spacing.xxsmall}`,
  marginRight: `-${Atoms.spacing.xxsmall}`,
  paddingLeft: Atoms.spacing.xxsmall,
  paddingRight: Atoms.spacing.xxsmall,
})
