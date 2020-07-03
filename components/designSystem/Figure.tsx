import cxs from "cxs/component"
import Atoms from "./atoms"

export interface FigureProps {
  className?: string
  responsive?: boolean
  margin?: boolean
}

const Figure = cxs<"figure", FigureProps>("figure")(
  ({ margin = true, responsive = true }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    writingMode: "horizontal-tb",
    marginBottom: margin ? Atoms.spacing.medium : 0,

    " img": {
      display: "block",
      width: responsive ? "100%" : "auto",
      flex: "1 1 auto",
      order: 2,
    },

    " figcaption": {
      order: 3,
      marginTop: Atoms.spacing.xxsmall,
    },
  })
)

export default Figure
