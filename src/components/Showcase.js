import React from "react"
import styled from "@emotion/styled"

import { Atoms } from "designSystem/designSystem"
import Image from "components/Image"
import { useEventListener, useDebounce } from "utils/hooks"

const { useCallback, useState } = React

const StyledShowcase = styled("div")`
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-template-rows: repeat(5, auto);
  max-width: 24rem;
  margin: ${Atoms.spacing.xlarge} auto ${Atoms.spacing.xlarge};
  perspective: 100vmax;
  transform-style: preserve-3d;
  transition: 0.3s ease;

  & > figure {
    margin: 0;
    position: relative;
    filter: grayscale(100);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    border-radius: 6px;
  }

  & > figure img {
    height: 100%;
    object-fit: cover;
  }

  & > figure:nth-of-type(n):hover {
    filter: none;
  }

  & > figure:nth-of-type(1) {
    grid-area: 1 / 1 / 3 / 3;
    transform: translateZ(-25px);
  }

  & > figure:nth-of-type(2) {
    grid-area: 2 / 2 / 4 / 4;
    z-index: 2;
    transform: translateZ(50px);
  }

  & > figure:nth-of-type(3) {
    grid-area: 3 / 3 / 5 / 5;
    transform: translateZ(15px);
  }

  & > figure:nth-of-type(4) {
    grid-area: 1 / 1 / 5 / 5;
    pointer-events: none;
    margin: -10% 0;
    mix-blend-mode: exclusion;
    box-shadow: none;
    border-radius: 0;

    & img {
      object-fit: contain;
    }
  }
`

export default function Showcase() {
  const deviceHasHover = window.matchMedia("(hover: hover)").matches
  // State for storing mouse coordinates
  const [coords, setCoords] = useState({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  })
  // Debounce the mouse coordinates to save on recalculations and make transitions smooth
  const debouncedCoords = useDebounce(coords, 2)

  const handler = useCallback(
    ({ clientX, clientY }) => {
      if (!deviceHasHover) return
      setCoords({ x: clientX, y: clientY })
    },
    [setCoords, deviceHasHover]
  )

  useEventListener("mousemove", handler)

  return (
    <StyledShowcase
      css={{
        transform: deviceHasHover
          ? `
          rotateY(${Math.round(
            (debouncedCoords.x / window.innerWidth) * 45 - 22.5
          )}deg)
          rotateX(${Math.round(
            (debouncedCoords.y / window.innerHeight) * -22.5 + 11.25
          )}deg)
          `
          : null,
      }}
    >
      <Image alt="A portrait photo of Daniel Eden" src="2018/10/portrait.jpg" />
      <Image
        alt="A piece of Daniel’s generative art"
        src="2018/10/GenArt.png"
      />
      <Image alt="Daniel’s home" src="2019/04/home.jpeg" />
      <Image alt="An illustration of Daniel’s name" src="2019/01/wavy.svg" />
    </StyledShowcase>
  )
}
