export default function PlainList({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ul>{children}</ul>
      <style jsx>{`
        ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
      `}</style>
    </>
  )
}
