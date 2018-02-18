import { media } from 'styles'

import { Text } from 'components'

export const Heading = Text.withComponent('h2').extend`
  font-size: 24px;
  line-height: 36px;
	font-weight: 600;
	letter-spacing: -1px;

  ${media.largeUp`
    font-size: 42px;
    line-height: 60px;
  `}
`
