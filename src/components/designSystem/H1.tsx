import Atoms from "./atoms"

export default function H1({
  children,
  id,
}: {
  children: React.ReactNode
  id?: string
}) {
  return (
    <>
      <h1 id={id}>{children}</h1>
      <style jsx>{`
        h1 {
          font-family: ${Atoms.font.family.display};
          font-size: 3rem;
          font-weight: 400;
          hyphens: initial;
          line-height: 1.1;
          margin-bottom: ${Atoms.spacing.medium};
          padding-bottom: ${Atoms.spacing.large};
          padding-top: ${Atoms.spacing.xlarge};
        }
      `}</style>
    </>
  )
}
