import React, { Component } from 'react'

import { colors } from 'styles'

import {
  Div,
  Section,
  Container,
  Row,
  Col,
  Text,
  Heading,
  Pagination
} from 'components'

import customersIcon from 'assets/icons/customers.svg'
import loansIcon from 'assets/icons/loans.svg'
import marketsIcon from 'assets/icons/markets.svg'

import slide1Background from 'assets/backgrounds/slide_1.svg'

const paginationStyles = {
  position: 'absolute',
  right: 0,
  top: '50%',
  transform: 'translateY(-50%)'
}

export class InfoSection extends Component {
  state = {
    activeStep: 0
  }

  handleChange = step => {
    this.setState({ activeStep: step })
  }

  render = () => (
    <Section background={colors.blue} height={780}>
      <Container relative column>
        <Pagination
          steps={3}
          activeStep={this.state.activeStep}
          horizontal
          onChange={this.handleChange}
          style={paginationStyles}
        />

        <Div column flex={1}>
          <Row style={{ flex: 'none' }}>
            <Col large={6} offsetLarge={3}>
              <Heading center>
                We provide financial freedom to the next 2 billion customers
              </Heading>
            </Col>
          </Row>

          <Items flex={1} itemsCenter background={slide1Background}>
            <Col small={2} offsetSmall={2} column itemsCenter>
              <img src={customersIcon} alt="" />
              <Value>783,690</Value>
              <Label>customers</Label>
            </Col>
            <Col small={2} offsetSmall={1} column itemsCenter>
              <img src={loansIcon} alt="" />
              <Value>1,644,869</Value>
              <Label>loans granted</Label>
            </Col>
            <Col small={2} offsetSmall={1} column itemsCenter>
              <img src={marketsIcon} alt="" />
              <Value>6</Value>
              <Label>world-wide markets</Label>
            </Col>
          </Items>
        </Div>
      </Container>
    </Section>
  )
}

const Items = Row.extend`
  background: url(${props => props.background}) no-repeat center;
`

const Value = Text.extend`
  margin-top: 26px;
  font-size: 42px;
  letter-spacing: -1px;
  line-height: 48px;
  font-weight: 400;
  text-align: center;
`

const Label = Text.extend`
  font-size: 24px;
  line-height: 36px;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
`
