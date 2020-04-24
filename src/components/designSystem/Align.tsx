import styled from '@emotion/styled'

const Left = styled.div`
  grid-column: start / main-start;
  height: 0;
`

const Right = styled.div`
  grid-column: main-end / end;
  height: 0;
`

const Align = { Left, Right }

export default Align
