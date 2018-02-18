import React from 'react'
import styled from 'styled-components'

import { media } from 'types'
import { colors } from 'styles'
import allContent from 'content'

import {
  Div,
  Container,
  Row,
  Col,
  Hr,
  Badge,
  ScrollToButton,
  PeopleStories
} from 'components'

import kreditechLogo from 'assets/logos/kreditech.svg'
import twitterLogo from 'assets/logos/twitter.svg'

const content = allContent.footer

export const Footer = (props, { media }) => (
  <Wrapper column>
    <Container column pTop={72} pBottom={48}>
      <Row>
        {Object.keys(content.links).map(key => (
          <Col key={key} small={3} column listTop={12}>
            <Title style={{ color: content.links[key].color }}>{key}</Title>
            {content.links[key].items.map(link => (
              <Link key={link.label} href={link.url}>
                {link.label}
              </Link>
            ))}
          </Col>
        ))}

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

    <Container column pTop={48}>
      <Row>
        <Col small={6} column listBottom={24} pBottom={45}>
          <Title>
            <img
              src={twitterLogo}
              width="22"
              style={{ marginRight: 16 }}
              alt=""
            />
            Latest on twitter
          </Title>
          <Twit>
            In largest ever equity investment in a German fintech company,
            Kreditech receives EUR 110 million investment from PayU and expands
            strategic partnership
          </Twit>
          <TwitAuthor>@MarekKowalski</TwitAuthor>
        </Col>

        <Col small={2} column listTop={12} pBottom={45}>
          <Title>
            Careers
            <Badge style={{ marginLeft: 8, color: colors.darkGray }}>35</Badge>
          </Title>

          <Link href="/">Project manager (m/f)</Link>
          <Link href="/">Front end developer (m/f)</Link>
          <Link href="/">Java developer (m/f)</Link>
        </Col>

        <Col column>
          <PeopleStories stories={content.stories} />
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
  background: ${colors.darkGray};
  color: white;
`

const Title = styled.span`
  display: flex;
  align-items: center;
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

const Twit = styled.p`
  margin: 0;
  opacity: 0.7;
  font-style: italic;
  line-height: 26px;
`

const TwitAuthor = styled.span`
  opacity: 0.7;
  font-weight: 600;
  line-height: 26px;
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
