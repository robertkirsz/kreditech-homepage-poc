import React from 'react'
import styled from 'styled-components'

import { media } from 'types'
import { colors } from 'styles'
import allContent from 'content'
import { Div, Container, Row, Col, Hr, ScrollToButton } from 'components'

import kreditechLogo from 'assets/logos/kreditech.svg'

const content = allContent.footer

export const Footer = (props, { media }) => (
  <Wrapper column>
    <Container column pTop={72} pBottom={48}>
      <Row>
        <Col small={3} column listTop={12}>
          <Title style={{ color: colors.green }}>People</Title>
          {content.links.people.map(link => (
            <Link key={link.label} href={link.url}>
              {link.label}
            </Link>
          ))}
        </Col>
        <Col small={3} column listTop={12}>
          <Title style={{ color: colors.yellow }}>Solutions</Title>
          {content.links.solutions.map(link => (
            <Link key={link.label} href={link.url}>
              {link.label}
            </Link>
          ))}
        </Col>
        <Col small={3} column listTop={12}>
          <Title style={{ color: colors.blue }}>Company</Title>
          {content.links.company.map(link => (
            <Link key={link.label} href={link.url}>
              {link.label}
            </Link>
          ))}
        </Col>
        <Col small={2} listTop={12} column>
          <Title>Contact us</Title>
          <Title>Investors</Title>
          <Title>News</Title>
          <PhoneNumber>
            <Prefix>+49</Prefix> 40 605 905 60
          </PhoneNumber>
        </Col>
        <Col small={1} justifyEnd>
          <ScrollToButton />
        </Col>
      </Row>
    </Container>

    <Hr />

    <Container column>
      <Row>
        <Col>Footer</Col>
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
  color: white;
`

const Title = styled.span`
  margin-bottom: 12px;
  font-weight: 600;
  line-height: 24px;
`

const Link = styled.a`
  opacity: 0.7;
  color: inherit;
  font-weight: 600;
  line-height: 26px;
  transition: 0.3s;

  &:hover {
    opacity: 1;
  }
`

const PhoneNumber = styled.span`
  opacity: 0.7;
  font-size: 24px;
  line-height: 48px;
`

const Prefix = styled.span`
  opacity: 0.7;
  font-size: 16px;
  line-height: 48px;
  vertical-align: super;
`

const Copyright = styled.span`
  opacity: 0.7;
  line-height: 24px;
`
