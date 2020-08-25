import { Atoms } from "."

export default function Code({ children }: { children: React.ReactNode }) {
  return (
    <>
      <code>{children}</code>
      <style jsx>{`
        padding: 0.1em 0.25em;
        vertical-align: baseline;
        background-color: rgba(128, 128, 128, 0.2);
        border-radius: 0.35em;
        font-family: ${Atoms.font.family.mono};
        font-size: 0.875em;
        line-height: 1;
        letter-spacing: -0.025em;
      `}</style>
    </>
  )
}
