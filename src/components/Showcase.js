import React from "react"
import styled from "@emotion/styled"

import { Atoms } from "designSystem/designSystem"
import Image from "components/Image"

const StyledShowcase = styled("div")`
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-template-rows: repeat(5, auto);
  max-width: 24rem;
  margin: ${Atoms.spacing.large} auto;

  & > figure {
    margin: 0;
    position: relative;
    filter: grayscale(100);
  }

  & > figure:hover {
    filter: none;
    z-index: 4;
  }

  & > figure:nth-child(1) {
    grid-area: 1 / 1 / 3 / 3;
  }

  & > figure:nth-child(2) {
    grid-area: 2 / 2 / 4 / 4;
    z-index: 2;
  }

  & > figure:nth-child(3) {
    grid-area: 3 / 3 / 5 / 5;
  }

  & > figure:nth-child(4) {
    grid-area: 1 / 1 / 5 / 5;
    pointer-events: none;
    margin: -8% -2%;
    mix-blend-mode: exclusion;
  }
`

export default function Showcase() {
  return (
    <StyledShowcase>
      <Image src="2018/10/portrait.jpg" />
      <Image src="2018/10/GenArt.png" />
      <Image src="2019/01/home.jpg" />
      <Image src="2019/01/wavy.png" />
    </StyledShowcase>
  )
}
