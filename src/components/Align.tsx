const Subject = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => (
  <>
    <div className={className}>{children}</div>
    <style>{`
      div {
        width: 100%;
        z-index: 1;
      }

      @media (min-width: 50em) {
        div {
          width: 40%;
        }
      }

      @media (min-width: 64em) {
        div {
          width: 50%;
        }
      }

      .left {
        float: left;
        margin-left: -25%;
        margin-right: var(--sp-m);
      }

      .right {
        float: right;
        margin-right: -25%;
        margin-left: var(--sp-m);
      }

      @media (max-width: 64em) {
        .left {
          margin-left: 0;
        }

        .right {
          margin-right: 0;
        }
      }

      @media (max-width: 50em) {
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
