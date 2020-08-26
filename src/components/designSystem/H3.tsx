import { Atoms } from "."

export default function H3({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h3>{children}</h3>
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
