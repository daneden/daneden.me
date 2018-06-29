import React from 'react'

import Image from './Image'

export default function Book({author, cover, title, url}) {
  return <div className="library__book small">
    <a href={url} className="sans plainlink">
      <Image className="m0" src={cover} />
      <span className="b">{title}</span>
      <em className="meta b">{author}</em>
    </a>
  </div>
}
