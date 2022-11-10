import { ReactNode } from "react"

interface WrapperProps {
  id?: string
  children: ReactNode
}

export default function Wrapper({ id = "content", children }: WrapperProps) {
  return (
    <>
      <div className="wrapper" id={id} role="region" tabIndex={-1}>
        <main>{children}</main>
      </div>
    </>
  )
}
