import React from "react"
import styled from "@emotion/styled"

import Atoms from "designSystem/atoms"

const StyledFooter = styled("footer")`
  border-top: 1px solid;
  color: ${Atoms.colors.meta};
  font-family: ${Atoms.font.family.sans};
  margin-top: ${Atoms.spacing.large};
  padding: ${Atoms.spacing.small} 0;
`

export default function Footer({ author }) {
  return (
    <StyledFooter>
      Content &copy; {new Date().getUTCFullYear()} {author}, unless otherwise
      specified
    </StyledFooter>
  )
}
