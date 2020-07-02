import cxs from "cxs/component"
import Atoms from "./atoms"

export default cxs("h1")({
  fontFamily: Atoms.font.family.sohne,
  fontSize: `clamp(${Atoms.font.size.h2}, 4vw, ${Atoms.font.size.h1})`,
  fontWeight: 700,
  hyphens: "initial",
  lineHeight: 1.1,
  marginBottom: Atoms.spacing.medium,
  paddingBottom: Atoms.spacing.large,
  paddingTop: Atoms.spacing.xlarge,
})
