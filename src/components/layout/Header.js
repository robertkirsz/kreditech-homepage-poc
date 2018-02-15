import React from 'react'
import { NavLink } from 'react-router-dom'

import { media } from 'types'
import { Div, Container, Row, Col } from 'components'

export const Header = (props, { media }) => (
  <Wrapper padding="24px 0">
    <Container column>
      <Row>
        <Col small={3}>
          Header
        </Col>
        <Col small={9} listRight={24}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
        </Col>
      </Row>
    </Container>
  </Wrapper>
)

Header.contextTypes = { media }

const Wrapper = Div.withComponent('header')
