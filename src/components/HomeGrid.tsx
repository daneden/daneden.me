import { css } from '@emotion/core'
import styled from '@emotion/styled'
import React, { ReactElement, useEffect } from 'react'
import Breakout from './Breakout'
import { Atoms, Link } from './designSystem/designSystem'

// Let Typescript know to expect this function to exist on `window`
declare global {
  interface Window {
    __DE__homePageSetup: () => void
  }
}
type FillAreaProps = {
  direction?: 'tl-br' | 'tr-bl' | 'center'
}

const GridContainer = styled.div`
  display: grid;
  grid-gap: ${Atoms.spacing.xxsmall};
  grid-template-columns: repeat(6, 1fr);
  margin-bottom: ${Atoms.spacing.large};

  @media (max-width: 545px) {
    display: none;
  }

  @supports not (background-image: paint(line)) {
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
  ({ direction = 'tl-br' }) => `
    --line-direction: ${direction};
    --line-color: var(--text-color);
    background-image: paint(line);
    min-height: 27.5vh;
    min-width: ${Atoms.spacing.medium};
`
)

export default function HomeGrid(): ReactElement<typeof Breakout> | null {
  const noHoudini =
    (typeof CSS !== 'undefined' &&
      !CSS.supports('background-image', 'paint(line)')) ||
    typeof CSS === 'undefined'

  useEffect(() => {
    window.__DE__homePageSetup()
  }, [])

  return !noHoudini ? (
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
            <Link to="/portfolio">a designer</Link>
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
            <Link to="/blog">writing about</Link>
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
          direction="tr-bl"
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
