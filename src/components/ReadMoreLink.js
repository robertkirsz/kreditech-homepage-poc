import styled from 'styled-components'

import arrowIcon from 'assets/icons/arrow.svg'

export const ReadMoreLink = styled.a`
  display: flex;
  align-items: center;
  padding: 4px;
  color: inherit;
  font-weight: 600;

  &::after {
    content: url(${arrowIcon});
    margin: 3px 0 0 10px;
  }
`
