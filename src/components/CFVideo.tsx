import styled from "@emotion/styled"
import React, { FunctionComponent } from "react"
import ScriptTag from "react-script-tag"
import { Atoms } from "./designSystem/designSystem"

interface CFVideoProps {
  id: string
}

const Container = styled.div`
  margin-bottom: ${Atoms.spacing.medium};
`

const CFVideo: FunctionComponent<CFVideoProps> = ({ id }) => {
  return (
    <Container>
      <stream src={id} controls></stream>
      <ScriptTag
        data-cfasync="false"
        defer
        type="text/javascript"
        src={`https://embed.videodelivery.net/embed/r4xu.fla9.latest.js?video=${id}`}
      />
    </Container>
  )
}

export default CFVideo
