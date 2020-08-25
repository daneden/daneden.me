import Atoms from "./atoms"

export default function H1({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h1>{children}</h1>
      <style jsx>{`
        h1 {
          font-family: ${Atoms.font.family.sohne};
          font-size: clamp(${Atoms.font.size.h2}, 4vw, ${Atoms.font.size.h1});
          font-weight: 700;
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
