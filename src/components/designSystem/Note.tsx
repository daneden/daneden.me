import { Atoms } from "."

export default function Note({ children }: { children: React.ReactNode }) {
  return (
    <>
      <aside>{children}</aside>
      <style jsx>{`
        aside {
          background-color: ${Atoms.colors.mark};
          border-left: 2px solid ${Atoms.colors.highlight};
          color: inherit;
          margin-bottom: ${Atoms.spacing.medium};
          padding: ${Atoms.spacing.small};
        }
      `}</style>
    </>
  )
}
