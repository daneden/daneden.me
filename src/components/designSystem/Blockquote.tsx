import { Atoms } from "."

export default function Blockquote({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <blockquote>{children}</blockquote>
      <style jsx>{`
        blockquote {
          border-left: 2px solid var(--site-color);
          font-style: italic;
          padding-left: ${Atoms.spacing.medium};
          margin-bottom: ${Atoms.spacing.medium};
        }
      `}</style>
    </>
  )
}
