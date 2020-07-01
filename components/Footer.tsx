/** @jsx jsx */
import { jsx } from "@emotion/core"
import styled from "@emotion/styled"
import { ReactElement } from "react"
import { Atoms, Link, Small } from "./designSystem"

const StyledFooter = styled("footer")`
  border-top: 1px solid;
  font-family: ${Atoms.font.family.sans};
  margin-top: ${Atoms.spacing.xlarge};
  padding-bottom: ${Atoms.spacing.large};
  padding-left: ${Atoms.widths.content};
  padding-top: ${Atoms.spacing.small};
`

const FooterWrapper = styled.div`
  max-width: ${Atoms.widths.container};
`

export default function Footer(): ReactElement<typeof StyledFooter> {
  return (
    <StyledFooter>
      <FooterWrapper>
        <Small display="block">
          Written, designed, and built by Daniel Eden, a designer who you can
          find on <Link href="https://twitter.com/_dte">Twitter</Link>,{" "}
          <Link href="https://github.com/daneden">GitHub</Link>, or good
          old-fashioned <Link href="mailto:dan.eden@me.com">Email</Link>.
        </Small>
      </FooterWrapper>
    </StyledFooter>
  )
}
