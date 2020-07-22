import cxs from "cxs/component"
import { ReactElement } from "react"
import { Atoms, Link, Small } from "./designSystem"

const StyledFooter = cxs("footer")({
  borderTop: "1px solid",
  fontFamily: Atoms.font.family.sans,
  marginTop: Atoms.spacing.large,
  paddingBottom: Atoms.spacing.large,
  paddingLeft: Atoms.widths.content,
  paddingTop: Atoms.spacing.small,
})

const FooterWrapper = cxs("div")({
  maxWidth: Atoms.widths.container,
})

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
