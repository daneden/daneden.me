import styled from "@emotion/styled"

interface PlainListProps {
  inline?: boolean
}

const PlainList = styled("ul")<PlainListProps>`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    display: ${props => (props.inline ? "inline-block" : "block")};
  }
`

export default PlainList
