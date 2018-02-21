import styled from 'styled-components'

import { colors } from 'styles'
import { createSpaces } from 'utils'

export const Button = styled.button`
  height: 60px;
  min-width: 280px;
  padding: 0 40px;

  border-radius: 30px;
  background-color: white;
  box-shadow: 0 10px 25px 0 rgba(0, 0, 0, 0.1), 0 5px 5px 0 rgba(0, 0, 0, 0.1);

  color: ${colors.blue};
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  text-align: center;

  ${createSpaces('margin')}

  ${props => props.visible !== undefined && `
    transition: opacity 0.3s;
    ${props.visible === false && 'opacity: 0;'}
  `}
`
