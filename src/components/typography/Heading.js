import styled from 'styled-components'

import { media } from 'styles'

import baseStyles from './TypographyBase'

export const Heading = styled.h2`
  ${baseStyles}

  font-size: 24px;
  line-height: 36px;
	font-weight: 600;
	letter-spacing: -1px;

  ${media.largeUp`
    font-size: 42px;
    line-height: 60px;
  `}
`
