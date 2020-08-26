import { Atoms } from "."

export default function P({ children }: { children: React.ReactNode }) {
  return (
    <>
      <p>{children}</p>
      <style jsx>{`
        p {
          margin-bottom: ${Atoms.spacing.medium};
          font-variant-numeric: oldstyle-nums;
        }
      `}</style>
    </>
  )
}
