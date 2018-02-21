import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { colors } from 'styles'
import { Div } from 'components'

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
        <BoxWrapper state={this.props.state} inverted={this.props.inverted}>
          <YellowBox state={this.props.state} />
          <GreenBox state={this.props.state} inverted={this.props.inverted} />
        </BoxWrapper>
      </Wrapper>
    )
  }
}

const translate = 1000
const offsetY = ({ inverted }) => (inverted ? -190 : 94)
const offsetX = 240

const Wrapper = Div.extend`
  position: absolute;
  transform: skew(-12.5deg);
  transform-origin: left bottom;
  z-index: -1;
`

const Box = styled.div`
  height: 640px;
  width: 350px;
  border-radius: 54px;

  ${({ state }) => state !== 'active' && 'opacity: 0;'}

  transition:
    transform 1s,
    opacity 0.3s ease ${({ state }) => state !== 'active' && '0.3s'};
`

const BlueBox = Box.extend`
  background: ${colors.blue};

  ${({ state }) => state === 'before' && `
    opacity: 0;
    transform: translateY(${translate}px);
  `}
`

const YellowBox = Box.extend`
  background: ${colors.yellow};
`

const GreenBox = Box.extend`
  position: absolute;
  top: ${offsetY}px;
  right: ${offsetX}px;

  background: ${colors.green};

  ${({ state }) => state === 'before' && `
    transform: translateY(${translate * 2}px);
  `}
`

const BoxWrapper = Box.extend`
  position: absolute;
  bottom: ${offsetY}px;
  left: ${offsetX}px;

  ${({ state }) => state === 'before' && `
    transform: translateY(-${translate}px);
  `}

  overflow: hidden;
`
