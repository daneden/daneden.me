/* eslint-disable mdx/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-explicit-any */
/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import styled from "@emotion/styled"
import { ReactElement, useEffect, useState } from "react"
import Breakout from "./Breakout"
import { Atoms, Link } from "./designSystem"

// Let Typescript know to expect this function to exist on `window`
declare global {
  interface Window {
    __houdiniSetupComplete: boolean
  }

  interface CSS {
    registerProperty: (any) => any
    paintWorklet: {
      addModule: (string) => any
    }
  }
}

const houdiniLineDirections = ["tlbr", "trbl", "center"]

const homePageSetup = (): void => {
  if (window.__houdiniSetupComplete) return

  try {
    CSS?.registerProperty({
      name: "--line-direction",
      syntax: houdiniLineDirections.join(" | "),
      initialValue: "tlbr",
      inherits: true,
    })

    CSS?.registerProperty({
      name: "--line-color",
      syntax: "<color>",
      initialValue: "currentcolor",
      inherits: true,
    })

    CSS?.paintWorklet?.addModule("/paintWorklet.js")
    window.__houdiniSetupComplete = true
  } catch (error) {
    console.error("Unable to register Houdini paint worklet:", error)
  }
}

type FillAreaProps = {
  direction?: typeof houdiniLineDirections[number]
}

const GridContainer = styled.div`
  display: grid;
  grid-gap: ${Atoms.spacing.xxsmall};
  grid-template-columns: repeat(6, 1fr);
  margin-bottom: ${Atoms.spacing.large};

  @media (max-width: 545px) {
    display: none;
  }
`

const GridTextArea = styled.div`
  font-size: 2em;
  text-align: center;
  white-space: nowrap;
  z-index: 1;

  span {
    padding: ${Atoms.spacing.xxsmall};
  }

  @media (max-width: 800px) {
    font-size: 0.875em;
  }
`

const GridFillArea = styled.div<FillAreaProps>(
  ({ direction = "tlbr" }: FillAreaProps) => `
    --line-direction: ${direction};
    --line-color: inherit;
    background-image: paint(line);
    min-height: 27.5vh;
    min-width: ${Atoms.spacing.medium};
`
)

export default function HomeGrid(): ReactElement<typeof Breakout> | null {
  const [houdini, setHoudini] = useState(false)
  const [setupComplete, setSetupComplete] = useState(
    window.__houdiniSetupComplete
  )

  useEffect(() => {
    setHoudini(
      typeof CSS !== "undefined" &&
        CSS.supports("background-image", "paint(line)")
    )

    if (houdini && !setupComplete) {
      homePageSetup()
      setSetupComplete(houdini)
    }
  }, [houdini, setHoudini, setupComplete])

  return houdini && setupComplete ? (
    <Breakout>
      <GridContainer>
        <GridTextArea
          css={css`
            grid-column: 1 / 2;
            grid-row-start: 1;
          `}
        >
          <span>Daniel Eden is</span>
        </GridTextArea>
        <GridFillArea
          css={css`
            grid-column: 1 / 2;
          `}
          direction="center"
        />
        <GridFillArea
          css={css`
            grid-column: 2 / 4;
            grid-row-start: 2;
          `}
        />
        <GridFillArea
          css={css`
            grid-column: 2 / 6;
            grid-row-start: 2;
            margin-top: -${Atoms.spacing.xsmall};
            margin-left: ${Atoms.spacing.xsmall};
          `}
        />
        <GridTextArea
          css={css`
            grid-column: 1 / 2;
            text-align: center;
          `}
        >
          <span>
            <Link href="/portfolio">a designer</Link>
          </span>
        </GridTextArea>
        <GridTextArea
          css={css`
            grid-column: 3 / 5;
          `}
        >
          <span>thinking about</span>
        </GridTextArea>
        <GridTextArea
          css={css`
            grid-column: 6 / 7;
          `}
        >
          <span>
            <Link href="/blog">writing about</Link>
          </span>
        </GridTextArea>
        <GridFillArea
          css={css`
            grid-column: 2 / 6;
            grid-row-start: 4;
          `}
          direction="center"
        />
        <GridFillArea
          css={css`
            grid-column: 5 / 6;
            grid-row-start: 4;
            margin-left: -${Atoms.spacing.xlarge};
          `}
          direction="trbl"
        />
        <GridTextArea
          css={css`
            grid-column: 3 / 5;
          `}
        >
          <span>design systems</span>
        </GridTextArea>
      </GridContainer>
    </Breakout>
  ) : null
}
