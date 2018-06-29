import React from 'react'

export default function Wrapper({ children, className }) {
  const classes = [
    "wrap",
    className,
  ].join(' ')

  return (
    <div className={classes}>
      {children}
    </div>
  )
}
