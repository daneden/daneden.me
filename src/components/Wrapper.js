import React from 'react'

export default function Wrapper({ isConstrained = true, children, className }) {
  const classes = [
    isConstrained ? "wrap" : '',
    className,
  ].join(' ')

  return (
    <div className={classes}>
      {children}
    </div>
  )
}
