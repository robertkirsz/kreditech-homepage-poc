import styled from 'styled-components'

import { media } from 'styles'

import baseStyles from './TypographyBase'

export const LargeHeading = styled.h1`
  ${baseStyles}

  font-size: 32px;
  letter-spacing: -1px;

  ${media.largeUp`
    font-size: 42px;
    line-height: 48px;
  `};
`
