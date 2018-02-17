import { css } from 'styled-components'

import { withUnit } from 'utils'

export default props => css`
  margin: 0;
  padding: 0;

  color: #363636;
  font-size: inherit;
  font-weight: inherit;
  line-height: normal;

  ${({ theme }) => theme.dark && 'color: white;'}
  ${({ center }) => center && 'text-align: center;'}
  ${({ mTop }) => mTop && css`margin-top: ${withUnit(mTop)};`}
  ${({ mRight }) => mRight && css`margin-right: ${withUnit(mRight)};`}
  ${({ mBottom }) => mBottom && css`margin-bottom: ${withUnit(mBottom)};`}
  ${({ mLeft }) => mLeft && css`margin-left: ${withUnit(mLeft)};`}
`
