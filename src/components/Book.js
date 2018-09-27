import React from "react"

import Image from "./Image"
import PlainLink from "designSystem/PlainLink"

export default function Book({ author, cover, title, url }) {
  return (
    <div className="library__book small">
      <PlainLink href={url}>
        <Image margin="none" src={cover} />
        <div>{title}</div>
        <em className="meta">{author}</em>
      </PlainLink>
    </div>
  )
}
