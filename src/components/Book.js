import React from "react"

import Atoms from "designSystem/atoms"
import Image from "./Image"
import PlainLink from "designSystem/PlainLink"
import styled from "@emotion/styled"

const BookLink = styled(PlainLink)`
  font-size: ${Atoms.font.size.small};
`

const Meta = styled("span")`
  color: ${Atoms.colors.meta};
`

export default function Book({ author, cover, title, url }) {
  return (
    <BookLink href={url}>
      <Image
        alt={`The book cover for “${title}” by ${author}`}
        margin="none"
        src={cover}
      />
      <div style={{ paddingTop: Atoms.spacing.xxsmall }}>{title}</div>
      <Meta>{author}</Meta>
    </BookLink>
  )
}
