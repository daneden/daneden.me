import { Atoms } from "."

export default function H3({
  children,
  id,
}: {
  children: React.ReactNode
  id?: string
}) {
  return (
    <>
      <h3 id={id}>{children}</h3>
      <style jsx>{`
        h3 {
          font-size: ${Atoms.font.size.regular};
          font-weight: 400;
          hyphens: initial;
          font-style: italic;
        }
      `}</style>
    </>
  )
}
