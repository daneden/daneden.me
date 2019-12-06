import styled from "@emotion/styled"
import React from "react"
import { Atoms } from "./designSystem/designSystem"
import Image from "./Image"

const StyledShowcase = styled("div")`
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-template-rows: repeat(5, auto);
  max-width: 24rem;
  margin: ${Atoms.spacing.xlarge} auto ${Atoms.spacing.xlarge};

  & > figure {
    margin: 0;
    position: relative;
    filter: grayscale(100);
  }

  & > figure:hover {
    filter: none;
    z-index: 4;
  }

  & > figure:nth-of-type(1) {
    grid-area: 1 / 1 / 3 / 3;
  }

  & > figure:nth-of-type(2) {
    grid-area: 2 / 2 / 4 / 4;
    z-index: 2;
  }

  & > figure:nth-of-type(3) {
    grid-area: 3 / 3 / 5 / 5;
  }

  & > figure:nth-of-type(4) {
    grid-area: 1 / 1 / 5 / 5;
    pointer-events: none;
    margin: -10% 0;
    mix-blend-mode: exclusion;
  }
`

export default function Showcase() {
  return (
    <StyledShowcase>
      <Image alt="A portrait photo of Daniel Eden" src="2018/10/portrait.jpg" />
      <Image
        alt="A piece of Daniel’s generative art"
        src="2018/10/GenArt.png"
      />
      <Image alt="Daniel’s home" src="2019/10/home.jpg" />
      <Image alt="An illustration of Daniel’s name" src="2019/01/wavy.svg" />
    </StyledShowcase>
  )
}
