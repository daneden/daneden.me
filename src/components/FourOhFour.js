import React from "react"
import styled from "@emotion/styled"
import PropMatrix from "react-prop-matrix"

import Atoms from "designSystem/atoms"
import H1 from "designSystem/H1"

const StyledH1 = styled(H1)`
  margin: 0;
  padding: 0;
  color: ${Atoms.colors.site};
`

export default function FourOhFour() {
  const variants = {
    width: [30, 50, 70, 90, 110].reverse(),
    weight: [600],
    slant: [3],
  }

  return (
    <div
      style={{
        textAlign: "center",
        paddingTop: Atoms.spacing.xlarge,
        marginBottom: Atoms.spacing.large,
      }}
    >
      <PropMatrix options={variants}>
        {props => (
          <StyledH1 as="span" {...props} role="presentation">
            404 Page Not Found{" "}
          </StyledH1>
        )}
      </PropMatrix>
    </div>
  )
}
