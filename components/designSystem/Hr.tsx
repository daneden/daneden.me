import cxs from "cxs/component"
import { Atoms } from "."

export default cxs("hr")({
  border: `2px solid var(--meta-color, ${Atoms.colors.meta})`,
  content: "",
  display: "block",
  height: 1,
  margin: `${Atoms.spacing.large} 0`,
})
