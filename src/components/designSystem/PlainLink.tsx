import React from "react"
import Link, { LinkProps } from "./Link"

type PlainLinkProps = LinkProps & {
  underline?: never
}

export default (props: PlainLinkProps) => <Link {...props} underline={false} />
