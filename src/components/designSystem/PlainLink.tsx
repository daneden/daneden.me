import React from "react"
import Link, { LinkProps } from "./Link"

type PlainLinkProps = Omit<LinkProps, "underline">

const PlainLink = (props: PlainLinkProps) => (
  <Link underline={false} {...props} />
)

export default PlainLink
