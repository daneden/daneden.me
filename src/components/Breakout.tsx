import styled from "@emotion/styled"
import React, { ReactNode } from "react"
import { Atoms } from "./designSystem/designSystem"

interface Props {
  children: ReactNode
}

const ContainerHack = styled.div`
  margin: 0 auto;
  width: 0;
`

const Container = styled.div`
  width: 100vw;
  margin-left: -50vw;
  padding: ${Atoms.spacing.small};
`

export default function Breakout({ children }: Props) {
  return (
    <ContainerHack>
      <Container>{children}</Container>
    </ContainerHack>
  )
}
