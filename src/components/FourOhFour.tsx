import { keyframes } from "@emotion/core"
import styled from "@emotion/styled"
import React from "react"
import Atoms from "./designSystem/atoms"
import H1 from "./designSystem/H1"

const { pnf, fof } = {
  pnf: 8.45,
  fof: 1.3562091503,
}

const bgMarquee = keyframes`
  from {
    background-position: ${pnf * -10}vmin 0, ${fof * 50}vmin 10vmin, ${pnf *
  -5}vmin 60vmin;
  }

  to {
    background-position: ${pnf * 10}vmin 0, ${fof * -50}vmin 10vmin, ${pnf *
  5}vmin 60vmin;
  }
`

const StyledH1 = styled(H1)`
  height: 70vmin;
  margin: 0;
  margin-left: -50vw;
  padding: 0;
  width: 100vw;
  background-image: url("/images/pnf.svg"), url("/images/404.svg"),
    url("/images/pnf.svg");
  background-repeat: repeat-x;
  background-size: auto 10vmin, auto 50vmin, auto 10vmin;
  background-position: 0 0, 0 10vmin, 0 60vmin;
  animation: ${bgMarquee} 10s infinite linear;
  span {
    visibility: hidden;
  }
`

export default function FourOhFour() {
  return (
    <div
      style={{
        marginBottom: Atoms.spacing.large,
        marginLeft: "auto",
        marginRight: "auto",
        textAlign: "center",
        width: "0",
      }}
    >
      <StyledH1>
        <span>404 Page Not Found</span>
      </StyledH1>
    </div>
  )
}
