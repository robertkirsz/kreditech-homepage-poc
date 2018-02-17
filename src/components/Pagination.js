import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Div } from 'components'

export const Pagination = ({
  horizontal,
  steps,
  activeStep,
  onChange,
  ...props
}) => (
  <Div
    listLeft={!horizontal && 9}
    column={horizontal}
    listTop={horizontal && 9}
    {...props}
  >
    {[...Array(steps)].map((value, index) => (
      <Dot
        key={index}
        isActive={activeStep === index}
        onClick={() => onChange(index)}
      />
    ))}
  </Div>
)

Pagination.propTypes = {
  steps: PropTypes.number.isRequired,
  activeStep: PropTypes.number.isRequired,
  horizontal: PropTypes.bool,
  onChange: PropTypes.func
}

const Dot = styled.span`
  display: block;
  height: 11px;
  width: 11px;
  border: 1px solid white;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.3s;

  ${props => !props.isActive && 'background: white;'};
`
