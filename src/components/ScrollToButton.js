import styled from 'styled-components'

import icon from 'assets/icons/scroll-to.svg'

export const ScrollToButton = styled.button`
  width: 50px;
  height: 50px;
  background: url(${icon}) no-repeat center;
  border: none;

  ${props => props.down && 'transform: rotate(180deg);'}

  ${props => props.visible !== undefined && `
    transition: opacity 0.3s;
    ${props.visible === false && 'opacity: 0;'}
  `}
`
