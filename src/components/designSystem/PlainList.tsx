import styled from '@emotion/styled'

interface PlainListProps {
  inline?: boolean
}

const PlainList = styled('ul')<PlainListProps>(
  props => `
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    display: ${props.inline ? 'inline-block' : 'block'};
  }
`
)

export default PlainList
