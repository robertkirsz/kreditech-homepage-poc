import React, { Component } from 'react'
import styled from 'styled-components'

import { Div, Pagination } from 'components'

import image from 'assets/story-man.png'
import box from 'assets/green-box.svg'

const items = [
  { text: 'My story is more than awesome', image },
  { text: 'My story is great', image },
  { text: 'My story is awesome', image }
]

export class PeopleStories extends Component {
  state = {
    activeStep: 0
  }

  handleChange = step => {
    this.setState({ activeStep: step })
  }

  render () {
    return (
      <Div flex={1} overlay="powderblue" column relative justifyCenter maxWidth={300}>
        <Message>{items[this.state.activeStep].text}</Message>
        <Pagination
          steps={3}
          activeStep={this.state.activeStep}
          onChange={this.handleChange}
          style={{ marginTop: 28 }}
        />
        <Background />
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
  background-image: url(${image}), url(${box});
  background-size: contain, 100% 120%;
  background-repeat: no-repeat;
  background-position: right bottom, right top;
`
