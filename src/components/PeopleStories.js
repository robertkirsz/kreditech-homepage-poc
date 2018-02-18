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
      <Div overlay="powderblue" flex={1} listLeft={12}>
        <Div column justifyCenter>
          <Message>{stories[activeStep].text}</Message>

          <Pagination
            steps={stories.length}
            activeStep={activeStep}
            onChange={this.handleChange}
            mTop={28}
          />
        </Div>

        <Background photo={stories[activeStep].photo} />
      </Div>
    )
  }
}

const Message = styled.p`
  position: relative;
  width: 180px;
  height: 72px;
  margin: 0;
  font-size: 24px;
  line-height: 36px;
  opacity: 0.7;

  &::after {
    content: '„';
    position: absolute;
    top: -93px;
    right: -20px;
    color: white;
    font-size: 240px;
    font-weight: 600;
    opacity: 0.1;
  }
`

const Background = Div.extend`
  height: 100%;
  width: 135px;
  background-image: url(${props => props.photo}), url(${box});
  background-size: contain, 130px 198px;
  background-repeat: no-repeat;
  background-position: right bottom, right top;
`
