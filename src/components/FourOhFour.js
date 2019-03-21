import React from "react"
import styled from "@emotion/styled"

import Atoms from "designSystem/atoms"
import H1 from "designSystem/H1"
import map from "utils/map"
import times from "utils/times"

const { useLayoutEffect, useState } = React

const StyledH1 = styled(H1)`
  margin: 0;
  padding: 0;
  color: ${Atoms.colors.site};
  font-size: 8vw;
`

export default function FourOhFour() {
  const [position, setPosition] = useState({
    x: 0.5,
    y: 0.5,
  })

  // A function to track the current mouse position as a percentage of the viewport size
  const mouseMoveListener = e => {
    const { clientX, clientY } = e
    const { innerWidth, innerHeight } = window

    // Limit the value accuracy to speed up this effect
    const xPercent = (clientX / innerWidth).toFixed(3)
    const yPercent = (clientY / innerHeight).toFixed(3)

    setPosition({
      x: xPercent,
      y: yPercent,
    })
  }

  // The min and max values for these properties
  const ranges = {
    width: [30, 110],
    weight: [100, 900],
  }

  // Create an array of ranges that results in a mirror image of
  // decreasing-and-increasing margins
  const headings = times(5).map((n, i, arr) => {
    const multiplier = map(i, 0, arr.length - 1, -1, 1)
    const weight = ranges.weight.map(n => Math.abs(n * multiplier))
    const width = ranges.width.map(n => Math.abs(n * multiplier))

    return {
      weight,
      width,
    }
  })

  useLayoutEffect(() => {
    window.addEventListener("mousemove", mouseMoveListener)

    return () => {
      window.removeEventListener("mousemove", mouseMoveListener)
    }
  }, [])

  return (
    <div
      style={{
        marginBottom: Atoms.spacing.large,
        marginLeft: `calc((${Atoms.widths.content} * -1) - ${
          Atoms.spacing.medium
        })`,
        textAlign: "center",
        width: "100vw",
      }}
    >
      {headings.map(n => (
        <StyledH1
          as="span"
          role="presentation"
          slant={3}
          weight={map(position.y, 0, 1, n.weight[0], n.weight[1])}
          width={map(position.x, 0, 1, n.width[0], n.width[1])}
        >
          404 Page Not Found
        </StyledH1>
      ))}
    </div>
  )
}
