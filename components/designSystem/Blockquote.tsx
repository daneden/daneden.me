import cxs from "cxs/component"
import { Atoms } from "."

export default cxs("blockquote")({
  borderLeft: "2px solid var(--site-color)",
  fontStyle: "italic",
  paddingLeft: Atoms.spacing.medium,
  marginBottom: Atoms.spacing.medium,
})
