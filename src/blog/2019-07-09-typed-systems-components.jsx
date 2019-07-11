import React from "react"

const Button = ({ children }) => {
  return (
    <div
      aria-label="Example/non-functional button"
      role="img"
      style={{ textAlign: "center" }}
    >
      <div
        style={{
          border: ".1em solid",
          borderRadius: ".25em",
          cursor: "normal",
          display: "inline-block",
          fontWeight: 400,
          padding: ".25em .75em",
          pointerEvents: "none",
          userSelect: "none",
        }}
      >
        {children}
      </div>
    </div>
  )
}

export { Button }
