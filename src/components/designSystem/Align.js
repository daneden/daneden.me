import styled from "@emotion/styled"
import Atoms from "./atoms"

const AlignedContainer = styled("div")`
  width: 100%;
  z-index: 1;

  @media (min-width: ${Atoms.breakpoints.narrow}) {
    width: 40%;
  }

  @media (min-width: ${Atoms.breakpoints.medium}) {
    width: 50%;
  }
`

const Left = styled(AlignedContainer)`
  float: left;
  margin-left: -25%;
  margin-right: ${Atoms.spacing.medium};

  @media (max-width: ${Atoms.breakpoints.medium}) {
    margin-left: 0;
  }

  @media (max-width: ${Atoms.breakpoints.narrow}) {
    float: none;
    margin-right: 0;
  }
`

const Right = styled(AlignedContainer)`
  float: right;
  margin-left: ${Atoms.spacing.medium};
  margin-right: -25%;

  @media (max-width: ${Atoms.breakpoints.medium}) {
    margin-right: 0;
  }

  @media (max-width: ${Atoms.breakpoints.narrow}) {
    float: none;
    margin-left: 0;
  }
`

const Align = { Left, Right }

export default Align
