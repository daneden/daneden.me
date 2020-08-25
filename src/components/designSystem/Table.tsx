import { Atoms } from "."

export default function Table({ children }: { children: React.ReactNode }) {
  return (
    <>
      <table>{children}</table>
      <style jsx>{`
        table {
          hyphens: initial;
          margin-bottom: ${Atoms.spacing.medium};
        }

        table :global(th),
        table :global(td) {
          vertical-align: top;
          padding: ${Atoms.spacing.xsmall};
          padding-top: 0;
        }

        table :global(th) {
          font-weight: normal;
          font-family: ${Atoms.font.family.mono};
        }
      `}</style>
    </>
  )
}
