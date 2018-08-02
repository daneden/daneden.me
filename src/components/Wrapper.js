import React from 'react'

export default function Wrapper({ isConstrained = true, children, className }) {
  const classes = [
    isConstrained ? "wrap" : null,
    className,
  ].filter(e => e !== undefined).join(' ')

  return (
    <div className={classes}>
      {children}
    </div>
  )
}
