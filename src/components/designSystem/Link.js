import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { css } from "react-emotion"

import { Atoms } from "./designSystem"

const styles = underline => css`
  color: inherit;
  text-decoration-skip-ink: auto;
  text-decoration-skip: ink;
  text-decoration: ${underline ? "underline" : "none"};

  &:hover,
  &:focus {
    color: ${Atoms.colors.site};
  }
`

const Link = ({ children, href, to, underline = true, ...other }) => {
  if (to !== undefined) {
    return (
      <GatsbyLink
        className={`${other.className} ${styles(underline)}`}
        to={to}
        {...other}
      >
        {children}
      </GatsbyLink>
    )
  }
  return (
    <a
      className={`${other.className} ${styles(underline)}`}
      href={href}
      {...other}
    >
      {children}
    </a>
  )
}

export default Link
