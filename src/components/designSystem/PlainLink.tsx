import React from "react"
import Link, { LinkProps } from "./Link"

type PlainLinkProps = Omit<LinkProps, "underline">

export default (props: PlainLinkProps) => <Link underline={false} {...props} />
