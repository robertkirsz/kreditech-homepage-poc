import React from 'react'
import styled from 'styled-components'

import { media } from 'types'
import { colors } from 'styles'
import allContent from 'content'
import {
  Div,
  Section,
  Container,
  Row,
  Col,
  Heading,
  ReadMoreLink
} from 'components'

const content = allContent.home.InvestorsSection

export const InvestorsSection = (props, { media }) => (
  <Section background={colors.yellow}>
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
              <ReadMoreLink href={investor.url} style={{ marginTop: 12 }}>
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
  max-width: 165px;

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
