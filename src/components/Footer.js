import React from 'react'

export default function Footer({ author }) {
  return (
    <footer className="site__footer pvl sans meta">
      Content &copy; {new Date().getUTCFullYear()} {author},
      unless otherwise specified
    </footer>
  )
}
