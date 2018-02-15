import React from 'react'

import { media } from 'types'
import { Div, Container, Row, Col } from 'components'

export const Footer = (props, { media }) => (
  <Wrapper padding="24px 0">
    <Container column>
      <Row>
        <Col>
          Footer
        </Col>
      </Row>
    </Container>
  </Wrapper>
)

Footer.contextTypes = { media }

const Wrapper = Div.withComponent('footer')
