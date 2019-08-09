// Creates an array on n length intended to be mapped over
// e.g.
// const values = times(5).map(n => (n + 1) * 2)
export default function times(n: number): Array<number> {
  return Array(n)
    .fill(undefined)
    .map((_, i) => i)
}
