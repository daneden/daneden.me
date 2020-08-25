import Atoms from "./atoms"

export interface FigureProps {
  className?: string
  responsive?: boolean
  margin?: boolean
  children: React.ReactNode
}

export default function Figure({
  margin = true,
  responsive = true,
  children,
  className,
}: FigureProps) {
  return (
    <>
      <figure className={className}>{children}</figure>
      <style jsx>{`
        figure {
          display: flex;
          flex-direction: column;
          justify-content: center;
          writing-mode: horizontal-tb;
          margin-bottom: ${margin ? Atoms.spacing.medium : 0};
        }

        figure :global(img) {
          display: block;
          width: ${responsive ? "100%" : "auto"};
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
