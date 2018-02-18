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

const Wrapper = Div.extend`
  position: absolute;
  width: 474px;
  height: 645px;
  z-index: -1;
`

const Box = styled.div`
  position: absolute;
  height: 644px;
  width: 350px;
  border-radius: 54px;

  ${props => props.state !== 'active' && 'opacity: 0;'}

  transition: transform 0.6s, opacity 0.3s ease ${
    props => props.state !== 'active' && '0.3s'
  };
`

const BlueBox = Box.extend`
  top: 0;
  left: 0;
  transform: skew(-12.5deg) translateX(-10px);
  transform-origin: left bottom;
  background: ${colors.blue};
`

const BoxWrapper = Box.extend`
  bottom: ${props => (props.inverted ? '-190' : '95')}px;
  left: ${props => (props.inverted ? '190' : '260')}px;
  transform: skew(-12.5deg) translateX(-10px);
  transform-origin: left bottom;
  overflow: hidden;
`

const YellowBox = Box.extend`
  background: ${colors.yellow};
`

const GreenBox = Box.extend`
  background: ${colors.green};
  left: ${props => (props.inverted ? '-232' : '-240')}px;
  top: ${props => (props.inverted ? '-191' : '94')}px;
`
