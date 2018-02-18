import React from 'react'

import {
  Div,
  Section,
  Container,
  Heading,
  Paragraph,
  Button,
  HiringBox
} from 'components'

import videoBackground from 'assets/backgrounds/video.jpg'

export const MovieSection = () => (
  <StyledSection>
    <Container>
      <Div column itemsCenter overlay="red" listBottom={24} maxWidth={570}>
        <Heading light center>
          „LAAS gives our users new buying opportunities with 99% repayment
          rate”
        </Heading>

        <Paragraph light center>
          Alexander Graubner-Müller<br />CEO of Kreditech
        </Paragraph>

        <Button>Learn more about our solutions</Button>

        <HiringBox mTop={124} />
      </Div>
    </Container>
  </StyledSection>
)

const StyledSection = Section.extend`
  background: #d9ebf9 url(${videoBackground}) no-repeat right center;
  height: 688px;
`
