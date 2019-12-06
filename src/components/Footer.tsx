import styled from "@emotion/styled"
import React from "react"
import Atoms from "./designSystem/atoms"

interface FooterProps {
  author: string
}

const StyledFooter = styled("footer")`
  border-top: 1px solid;
  color: var(--meta-color, ${Atoms.colors.meta});
  font-family: ${Atoms.font.family.sans};
  margin-top: ${Atoms.spacing.xlarge};
  padding-bottom: ${Atoms.spacing.large};
  padding-left: ${Atoms.widths.content};
  padding-top: ${Atoms.spacing.small};
`

export default function Footer({ author }: FooterProps) {
  return (
    <StyledFooter>
      Content &copy; {new Date().getUTCFullYear()} {author}, unless otherwise
      specified
    </StyledFooter>
  )
}
