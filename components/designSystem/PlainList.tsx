import cxs from "cxs/component"

interface PlainListProps {
  inline?: boolean
  children: React.ReactNode
}

const PlainList = cxs<"ul", PlainListProps>("ul")(({ inline }) => ({
  listStyle: "none",
  padding: 0,
  margin: 0,

  " li": {
    display: inline ? "inline-block" : "block",
  },
}))

export default PlainList
