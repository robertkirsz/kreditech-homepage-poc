import styled from 'styled-components'

import { media } from 'styles'

import baseStyles from './TypographyBase'

export const Heading = styled.h2`
  ${baseStyles}

  font-size: 18px;
  ${media.largeUp`font-size: 24px;`};
`
