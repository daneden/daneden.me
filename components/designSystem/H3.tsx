import cxs from "cxs/component"
import { Atoms } from "."

export default cxs("h3")({
  fontSize: Atoms.font.size.regular,
  fontWeight: 400,
  fontStyle: "italic",
  hyphens: "initial",
})
