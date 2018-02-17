import styled from 'styled-components'

import { media } from 'styles'

import { Div } from 'components'

export const Container = styled(Div)`
  width: 100%;
  max-width: 1280px;

  margin: 0 auto;

  padding-left: 8px;
  padding-right: 8px;

  ${media.mediumUp`
    padding-left: 12px;
    padding-right: 12px;
  `}

  ${media.largeUp`
    padding-left: 16px;
    padding-right: 16px;
  `}
`
