import { colors } from 'styles'

import { Div } from 'components'

export const Text = Div.withComponent('span').extend`
  font-size: inherit;
  font-weight: inherit;
  line-height: normal;

  ${({ theme, dark }) => (!theme.dark || dark) && `color: ${colors.darkGray};`}
  ${({ theme, light }) => (theme.dark || light) && 'color: white;'}
  ${({ center }) => center && 'text-align: center;'}

  ${({ shadow }) => shadow && 'text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);'}
`
