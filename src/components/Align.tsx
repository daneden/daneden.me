import Atoms from "./designSystem/atoms"

const Subject = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => (
  <>
    <div className={className}>{children}</div>
    <style jsx>{`
      div {
        width: 100%;
        z-index: 1;
      }

      @media (min-width: ${Atoms.breakpoints.narrow}) {
        div {
          width: 40%;
        }
      }

      @media (min-width: ${Atoms.breakpoints.medium}) {
        div {
          width: 50%;
        }
      }

      .left {
        float: left;
        margin-left: -25%;
        margin-right: ${Atoms.spacing.medium};
      }

      .right {
        float: right;
        margin-right: -25%;
        margin-left: ${Atoms.spacing.medium};
      }

      @media (max-width: ${Atoms.breakpoints.medium}) {
        .left {
          margin-left: 0;
        }

        .right {
          margin-right: 0;
        }
      }

      @media (max-width: ${Atoms.breakpoints.narrow}) {
        .left,
        .right {
          float: none;
          margin-left: 0;
          margin-right: none;
        }
      }
    `}</style>
  </>
)

const Align = {
  Left({ children }: { children: React.ReactNode }) {
    return <Subject className="left">{children}</Subject>
  },
  Right({ children }: { children: React.ReactNode }) {
    return <Subject className="right">{children}</Subject>
  },
}

export default Align
