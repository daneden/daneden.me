import cxs from "cxs/component"
import { ReactElement } from "react"
import { Atoms, Link } from "./designSystem"

const StyledNav = cxs("nav")({
  backgroundColor: Atoms.colors.highlight,
  color: Atoms.colors.text,
  height: 0,
  margin: `0 -${Atoms.spacing.medium}`,
  padding: `${Atoms.spacing.xsmall} ${Atoms.spacing.medium}`,
  position: "absolute",
  top: "-100%",

  " a": {
    "--hover-color": Atoms.colors.text,
  },

  ":focus-within": {
    height: "auto",
    position: "initial",
  },
})

const SkipLink = (): ReactElement<typeof StyledNav> => (
  <StyledNav>
    <Link href="#content">Skip to content</Link>
  </StyledNav>
)

export default SkipLink
