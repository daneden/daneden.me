import { Atoms } from "."

export default function Hr() {
  return (
    <>
      <hr />
      <style jsx>{`
        hr {
          border: 2px solid var(--meta-color, ${Atoms.colors.meta});

          display: block;
          height: 1;
          margin: ${Atoms.spacing.xlarge} 0;
        }
      `}</style>
    </>
  )
}
