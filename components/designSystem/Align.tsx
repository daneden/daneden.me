import cxs from "cxs/component"
import Atoms from "./atoms"

const AlignedContainer = cxs("div")({
  width: "100%",
  zIndex: 1,

  [`@media (min-width: ${Atoms.breakpoints.narrow})`]: {
    width: "40%",
  },

  [`@media (min-width: ${Atoms.breakpoints.medium})`]: {
    width: "50%",
  },
})

const Left = cxs(AlignedContainer)({
  float: "left",
  marginLeft: "-25%",
  marginRight: Atoms.spacing.medium,

  [`@media (max-width: ${Atoms.breakpoints.medium})`]: {
    marginLeft: 0,
  },

  [`@media (max-width: ${Atoms.breakpoints.narrow})`]: {
    float: "none",
    marginRight: 0,
  },
})

const Right = cxs(AlignedContainer)({
  float: "right",
  marginLeft: Atoms.spacing.medium,
  marginRight: "-25%",

  [`@media (max-width: ${Atoms.breakpoints.medium})`]: {
    marginRight: 0,
  },

  [`@media (max-width: ${Atoms.breakpoints.narrow})`]: {
    float: "none",
    marginLeft: 0,
  },
})

const Align = { Left, Right }

export default Align
