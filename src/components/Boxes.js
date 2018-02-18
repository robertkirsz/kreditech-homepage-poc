import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Div } from 'components'

import blueBox from 'assets/blue-box.svg'
import greenBox from 'assets/green-box.svg'
import yellowBox from 'assets/yellow-box.svg'

export class Boxes extends Component {
  static propTypes = {
    state: PropTypes.oneOf(['before', 'active', 'after']),
    top: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    left: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    inverted: PropTypes.bool
  }

  static defaultProps = {
    state: 'active',
    top: 0,
    left: 0,
    inverted: false
  }

  render () {
    return (
      <Wrapper {...this.props}>
        <BlueBox state={this.props.state} />
        <YellowBox state={this.props.state} inverted={this.props.inverted} />
      </Wrapper>
    )
  }
}

const Wrapper = Div.extend`
  position: absolute;
  width: 474px;
  height: 645px;
  z-index: -1;
`

const Box = styled.div`
  position: absolute;

  width: 474px;
  height: 645px;

  background-repeat: no-repeat;
  background-position: left top;

  ${props => props.state !== 'active' && 'opacity: 0;'}

  transition: transform 0.6s, opacity 0.3s ease ${
    props => props.state !== 'active' && '0.3s'
  };
`

const coords = {
  before: { x: 200, y: -1000 },
  after: { x: -200, y: 1000 }
}

const BlueBox = Box.extend`
  top: 0;
  left: 0;

  background-image: url(${blueBox});

  ${({ state }) =>
    state !== 'active' &&
    `transform: translate(${coords[state].x}px, ${coords[state].y}px)`
  }
`

const YellowBox = Box.extend`
  bottom: ${props => (props.inverted ? '-190' : '95')}px;
  left: ${props => (props.inverted ? '190' : '260')}px;

  background-image: url(${greenBox}), url(${yellowBox});
  background-position: ${props => (props.inverted ? '-190px -190px' : '-260px 95px')}, left top;

  ${({ state }) =>
    state !== 'active' &&
    `transform: translate(${-1 * coords[state].x}px, ${-1 * coords[state].y}px)`
  }
`
