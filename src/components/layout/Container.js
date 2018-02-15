import styled from 'styled-components'

import { media } from 'styles'

import { Div } from 'components'

export const Container = styled(Div)`
  width: 100%;
  max-width: 1280px;

  margin: 0 auto;

  padding: 0 8px;
  ${media.mediumUp`padding: 0 12px;`}
  ${media.largeUp`padding: 0 16px;`}
`
