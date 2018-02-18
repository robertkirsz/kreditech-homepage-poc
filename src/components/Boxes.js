import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Div } from 'components'

import blueBox from 'assets/blue-box.svg'
import yellowBox from 'assets/yellow-box.svg'

export class Boxes extends Component {
  static propTypes = {
    top: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    left: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    inverted: PropTypes.bool
  }

  static defaultProps = {
    top: 0,
    left: 0,
    inverted: false
  }

  state = {
    animation: 'active'
  }

  render () {
    return (
      <Wrapper {...this.props}>
        <BlueBox state={this.state.animation} />
        <YellowBox state={this.state.animation} inverted={this.props.inverted} />

        <Buttons listLeft={20}>
          <button onClick={() => this.setState({ animation: 'before' })}>
            Before
          </button>
          <button onClick={() => this.setState({ animation: 'active' })}>
            Active
          </button>
          <button onClick={() => this.setState({ animation: 'after' })}>
            After
          </button>
        </Buttons>
      </Wrapper>
    )
  }
}

const Wrapper = Div.extend`
  position: absolute;
  width: 474px;
  height: 647px;
  z-index: -1;
`

const Box = styled.div`
  position: absolute;

  width: 474px;
  height: 647px;

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
  bottom: ${props => (props.inverted ? '-190' : '-95')}px;
  left: ${props => (props.inverted ? '190' : '280')}px;

  background-image: url(${yellowBox});

  ${({ state }) =>
    state !== 'active' &&
    `transform: translate(${-1 * coords[state].x}px, ${-1 * coords[state].y}px)`
  }
`

const Buttons = Div.extend`
  position: fixed;
  top: 20px;
  left: 20px;
  padding: 8px;
  background: powderblue;
  z-index: 2000;
`
