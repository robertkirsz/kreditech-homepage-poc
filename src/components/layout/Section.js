import { withUnit } from 'utils'

import { Div } from 'components'

const defaultProps = {
  padding: '92px 0'
}

export const Section = Div.withComponent('section').extend`
  padding: ${({ padding }) => withUnit(padding)};
`

Section.defaultProps = defaultProps
