import styled from 'styled-components'

import { media } from 'styles'

import baseStyles from './TypographyBase'

export const Subheading = styled.h3`
  ${baseStyles}

  font-weight: 600;
  font-size: 16px;
  line-height: 1.4;

  ${media.largeUp`font-size: 18px;`};
`
