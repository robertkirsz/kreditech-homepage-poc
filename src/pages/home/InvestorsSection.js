import React from 'react'
import styled from 'styled-components'

import { media } from 'types'
import { colors } from 'styles'
import allContent from 'content'
import { Div, Section, Container, Row, Col, Heading } from 'components'

import arrowIcon from 'assets/icons/arrow.svg'

const content = allContent.home.InvestorsSection

export const InvestorsSection = (props, { media }) => (
  <Section background="#FFC41D">
    <Container column>
      <Row>
        <Col small large={6} offsetLarge={3} justifyCenter>
          <Heading center>{content.heading}</Heading>
        </Col>
      </Row>
      <Row justifyCenter>
        {content.investors.map((investor, index) => (
          <Col
            key={index}
            small={12}
            medium={6}
            large={3}
            height={170}
            relative
            justifyCenter
            itemsCenter
          >
            <InvestorLogo src={investor.logo} alt="" />
            <InfoBox layer column itemsCenter>
              {investor.info}
              <ReadMoreLink href={investor.url}>
                {content.readMoreLink}
              </ReadMoreLink>
            </InfoBox>
          </Col>
        ))}
      </Row>
    </Container>
  </Section>
)

InvestorsSection.contextTypes = { media }

const InvestorLogo = styled.img`
  &:hover + div {
    transform: scale(1);
  }
`

const InfoBox = Div.extend`
  padding: 30px 16px;
  background: ${colors.darkGray};

  color: white;
  line-height: 24px;
  text-align: center;

  transform: scale(0);
  transition: 0.3s;

  &:hover {
    transform: scale(1);
  }
`

const ReadMoreLink = styled.a`
  display: flex;
  align-items: center;
  margin-top: 12px;
  padding: 4px;
  color: inherit;
  font-weight: 600;

  &::after {
    content: url(${arrowIcon});
    margin: 3px 0 0 10px;
  }
`
