import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { Paragraph } from 'components'

import suitcase from 'assets/icons/suitcase.svg'
import suitcaseWhite from 'assets/icons/suitcase-white.svg'

export const HiringBox = ({ light, ...props }) => (
  <Wrapper center shadow light={light} {...props}>
    <Link to="/">
      We’re hiring!<br />
      Check current 35 openings
    </Link>
  </Wrapper>
)

HiringBox.propTypes = {
  light: PropTypes.bool
}

const Wrapper = Paragraph.extend`
  a {
    color: inherit;
  }

  &::after {
    content: url('${props => (props.light ? suitcaseWhite : suitcase)}');
    margin: 0 0 -4px 11px;
    align-self: flex-end;
  }
`
