import React from 'react'
import styled from 'styled-components'

import {
  Div,
  Section,
  Container,
  Heading,
  Image,
  Row,
  Col,
  Boxes,
  ReadMoreLink
} from 'components'

import twitterLogo from 'assets/logos/twitter.svg'
import facebookLogo from 'assets/logos/facebook.svg'
import googlePlusLogo from 'assets/logos/google-plus.svg'
import news1 from 'assets/news/news_1.jpg'
import news2 from 'assets/news/news_2.jpg'
import news3 from 'assets/news/news_3.jpg'

export const NewsSection = () => (
  <Section padding="170px 0 217px" relative>
    <Container column relative z={1}>
      <Row>
        <Col small={2} offsetSmall={1} column relative>
          <Heading style={{ color: 'white', lineHeight: '48px' }}>
            Latest news
          </Heading>

          <Div mTop={28} listLeft={32} itemsCenter>
            <img src={twitterLogo} alt="" />
            <img src={facebookLogo} alt="" />
            <img src={googlePlusLogo} alt="" />
          </Div>

          <Boxes top={-110} left={-120} />
        </Col>

        <Col column itemsStart>
          <Image src={news1} alt="" />
          <Date>12 November 2017</Date>
          <Text>
            Why data inspires my job and has changed my perspective on
            innovation
          </Text>
        </Col>

        <Col column itemsStart>
          <Image src={news2} alt="" />
          <Date>6 November 2017</Date>
          <Text>Kreditech ranked among top 10 fintechs worldwide</Text>
        </Col>

        <Col column itemsStart>
          <Image src={news3} alt="" />
          <Date>1 November 2017</Date>
          <Text>
            Why data inspires my job and has changed my perspective on
            innovation
          </Text>
        </Col>
      </Row>

      <Row mTop={24}>
        <Col small={3} offsetSmall={3}>
          <ReadMoreLink href="/">More news</ReadMoreLink>
        </Col>
      </Row>
    </Container>
  </Section>
)

const Date = styled.span`
  margin-top: 13px;
  height: 24px;
  width: 279px;
  opacity: 0.8;
  color: #363636;
  font-family: 'Source Sans Pro';
  font-size: 14px;
  line-height: 24px;
`

const Text = styled.span`
  height: 108px;
  width: 274.39px;
  color: #363636;
  font-family: 'Source Sans Pro';
  font-size: 24px;
  font-weight: 600;
  line-height: 36px;
`
