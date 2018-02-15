import styled from 'styled-components'

import baseStyles from './TypographyBase'

export const Hyperlink = styled.a`
  ${baseStyles}

  display: inline-block;

  color: blue;
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;
  text-decoration: none;

  cursor: pointer;
  user-select: none;
  transition: color .3s;

  ${props => props.center && 'text-align: center;'}

  &::after {
    content: "";

    display: block;
    width: 0;
    height: 1px;

    position: relative;
    left: 50%;

    background-color: blue;

    transform: translateX(-50%);
    transition: width 0.3s;
  }

  &:hover::after {
    width: 100%;
  }
`
