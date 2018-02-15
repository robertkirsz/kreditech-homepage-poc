import styled from 'styled-components'

import { withUnit } from 'utils'

export default styled.img`
  display: block;
  width: 100%;

  ${({ maxWidth }) => maxWidth && `max-width: ${withUnit(maxWidth)};`}
`
