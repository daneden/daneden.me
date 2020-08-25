import { Atoms } from "."

export default function H2({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h2>{children}</h2>
      <style jsx>{`
        h2 {
          font-size: ${Atoms.font.size.h2};
          font-weight: 400;
          hyphens: initial;
          letter-spacing: -0.025em;
          margin-bottom: ${Atoms.spacing.medium};
          padding-top: ${Atoms.spacing.small};
        }
      `}</style>
    </>
  )
}
