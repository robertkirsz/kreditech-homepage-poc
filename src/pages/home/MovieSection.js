import React from 'react'
import styled from 'styled-components'

import {
  Div,
  Section,
  Container,
  Heading,
  Paragraph,
  Button,
  Boxes,
  HiringBox
} from 'components'

import videoBackground from 'assets/backgrounds/video.jpg'
import pauseIcon from 'assets/icons/pause.svg'
import muteIcon from 'assets/icons/mute.svg'

export const MovieSection = () => (
  <StyledSection padding="80px 0 50px">
    <Container relative>
      <Div
        relative
        z={1}
        column
        itemsCenter
        listBottom={24}
        maxWidth={570}
      >
        <Heading light center>
          „LAAS gives our users new buying opportunities with 99% repayment
          rate”
        </Heading>

        <Paragraph light center>
          Alexander Graubner-Müller<br />CEO of Kreditech
        </Paragraph>

        <Button>Learn more about our solutions</Button>

        <HiringBox mTop={124} />

        <Boxes top={-200} left={-110} inverted />
      </Div>

      <Controls itemsCenter listLeft={48}>
        <Timeline />
        <img src={muteIcon} alt="" />
        <img src={pauseIcon} alt="" />
      </Controls>
    </Container>
  </StyledSection>
)

const StyledSection = Section.extend`
  background: #D9EBF9 url(${videoBackground}) no-repeat right center;
  background-size: contain;
`

const Controls = Div.extend`
  position: absolute;
  right: 16px;
  bottom: 0;
`

const Timeline = styled.div`
  height: 7px;
  width: 240px;
  border-radius: 4px;
  background: white;

  &::after {
    content: '';
    display: block;
    height: 100%;
    width: 38px;
    border-radius: 4px;
    background-color: #FFC41D;
  }
`
