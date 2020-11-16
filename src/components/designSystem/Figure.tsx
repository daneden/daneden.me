import Atoms from "./atoms"

export interface FigureProps {
  className?: string
  responsive?: boolean
  margin?: boolean
  children: React.ReactNode
}

export default function Figure({ children, className }: FigureProps) {
  return (
    <>
      <figure className={className}>{children}</figure>
      <style jsx>{`
        figure {
          display: flex;
          flex-direction: column;
          justify-content: center;
          writing-mode: horizontal-tb;
          margin-bottom: ${Atoms.spacing.medium};
        }

        figure :global(img) {
          display: block;
          width: 100%;
          flex: 1 1 auto;
          order: 2;
        }

        figure :global(figcaption) {
          order: 3;
          margin-top: ${Atoms.spacing.xxsmall};
          color: var(--meta-color);
        }
      `}</style>
    </>
  )
}
