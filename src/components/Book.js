import React from "react"

import Atoms from "designSystem/atoms"
import Image from "./Image"
import PlainLink from "designSystem/PlainLink"
import Sans from "designSystem/Sans"
import styled from "@emotion/styled"

const BookLink = styled(PlainLink)`
  font-size: ${Atoms.font.size.small};
`

const Meta = styled(Sans)`
  color: ${Atoms.colors.meta};
`

export default function Book({ author, cover, title, url }) {
  return (
    <BookLink href={url}>
      <Image margin="none" src={cover} />
      <div>{title}</div>
      <Meta>{author}</Meta>
    </BookLink>
  )
}
