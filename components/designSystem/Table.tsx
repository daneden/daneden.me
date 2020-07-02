import cxs from "cxs/component"
import { Atoms } from "."

const commonProps = {
  verticalAlign: "top",
  paddingBottom: Atoms.spacing.xsmall,
  paddingLeft: Atoms.spacing.xsmall,
  paddingRight: Atoms.spacing.xsmall,
}

export default cxs("table")({
  hyphens: "initial",
  marginBottom: Atoms.spacing.medium,

  " th": {
    ...commonProps,
    fontWeight: "normal",
    fontFamily: Atoms.font.family.mono,
  },

  " td": commonProps,
})
