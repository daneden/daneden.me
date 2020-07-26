import cxs from "cxs/component"

interface PlainListProps {
  children: React.ReactNode
}

const PlainList = cxs("ul")({
  listStyle: "none",
  padding: 0,
  margin: 0,
})

export default PlainList
