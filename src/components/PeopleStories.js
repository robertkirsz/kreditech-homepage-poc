import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Div, Pagination } from 'components'

import box from 'assets/green-box.svg'

export class PeopleStories extends Component {
  static propTypes = {
    stories: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        photo: PropTypes.string.isRequired
      })
    ).isRequired
  }

  state = {
    activeStep: 0
  }

  handleChange = step => {
    this.setState({ activeStep: step })
  }

  render () {
    const { stories } = this.props
    const { activeStep } = this.state

    return (
      <Div
        flex={1}
        overlay="powderblue"
        column
        relative
        justifyCenter
        maxWidth={300}
      >
        <Message>{stories[activeStep].text}</Message>
        <Pagination
          steps={3}
          activeStep={activeStep}
          onChange={this.handleChange}
          style={{ marginTop: 28 }}
        />
        <Background photo={stories[activeStep].photo} />
      </Div>
    )
  }
}

const Message = styled.p`
  max-width: 180px;
  margin: 0;
  font-size: 24px;
  line-height: 36px;
  opacity: 0.7;
`

const Background = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100px;
  background-color: red;
  background-image: url(${props => props.photo}), url(${box});
  background-size: contain, 100% 120%;
  background-repeat: no-repeat;
  background-position: right bottom, right top;
`
