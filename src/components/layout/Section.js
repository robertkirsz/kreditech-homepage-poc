import styled from 'styled-components'

import { withUnit } from 'utils'

import { Div } from 'components'

export const Section = styled(Div.withComponent('section'))`
  padding: ${({ padding }) => withUnit(padding)};

  ${({ background }) => background && `background: ${background};`}
`

Section.defaultProps = {
  padding: '96px 0'
}
