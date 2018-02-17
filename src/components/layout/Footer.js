import React from 'react'
import styled from 'styled-components'

import { media } from 'types'
import allContent from 'content'
import { Div, Container, Row, Col, Hr } from 'components'

import kreditechLogo from 'assets/logos/kreditech.svg'

const content = allContent.footer

export const Footer = (props, { media }) => (
  <Wrapper column>
    <Container column>
      <Row>
        <Col>
          Footer
        </Col>
      </Row>
    </Container>

    <Hr />

    <Container pTop={66} pBottom={66}>
      <Row>
        <Col>
          <img src={kreditechLogo} alt="" />
        </Col>
        <Col>
          <Copyright>{content.copyright}</Copyright>
        </Col>
      </Row>
    </Container>
  </Wrapper>
)

Footer.contextTypes = { media }

const Wrapper = Div.withComponent('footer').extend`
  background: #363636;
`

const Copyright = styled.span`
  opacity: 0.7;
  color: #FFFFFF;
  line-height: 24px;
`
