import React, { ReactElement } from "react"
import Link, { LinkProps } from "./Link"

type PlainLinkProps = LinkProps & {
  underline?: never
}

export default (props: PlainLinkProps): ReactElement<typeof Link> => (
  <Link {...props} underline={false} />
)
