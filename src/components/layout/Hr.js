import styled from 'styled-components'

export const Hr = styled.hr`
  width: 100%;
  margin: ${props => props.margin};
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`

Hr.defaultProps = {
  margin: '4px 0'
}
