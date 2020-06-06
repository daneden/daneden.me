/** @jsx jsx */
import { jsx } from "@emotion/core"
import styled from "@emotion/styled"
import { ReactElement, ReactNode, useEffect } from "react"
import { Atoms } from "./designSystem"

interface Props {
  children: ReactNode
}

const ContainerHack = styled.div`
  margin: 0 auto;
  width: 0;
`

const Container = styled.div`
  width: calc(100vw - var(--scrollbar-width));
  margin-left: -50vw;
  padding: ${Atoms.spacing.small};
`

export default function Breakout({
  children,
}: Props): ReactElement<typeof ContainerHack> {
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--scrollbar-width",
      window.innerWidth - document.documentElement.clientWidth + "px"
    )
  })
  return (
    <ContainerHack>
      <Container>{children}</Container>
    </ContainerHack>
  )
}
