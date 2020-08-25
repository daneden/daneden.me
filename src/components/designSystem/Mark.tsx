import { Atoms } from "."

export default function Mark({ children }: { children: React.ReactNode }) {
  return (
    <>
      <mark>{children}</mark>
      <style jsx>{`
        mark {
          background-color: ${Atoms.colors.mark};
          border-radius: ${Atoms.spacing.xxsmall};
          color: inherit;
          margin-left: -${Atoms.spacing.xxsmall};
          margin-right: -${Atoms.spacing.xxsmall};
          padding-left: ${Atoms.spacing.xxsmall};
          padding-right: ${Atoms.spacing.xxsmall};
        }
      `}</style>
    </>
  )
}
