import React from 'react'

import { media } from 'types'

import { Section, Container, LargeHeading, ScrollToButton } from 'components'

import background from 'assets/backgrounds/home-page-intro.jpg'

const contextTypes = { media }

const scrollToButtonStyles = {
  position: 'absolute',
  bottom: 36,
  left: '50%',
  marginLeft: -25
}

export const IntroSection = (props, { media }) => (
  <Section backgroundImage={background} cover fullHeight={media.largeUp}>
    <Container>
      <LargeHeading center>IntroSection</LargeHeading>
      <ScrollToButton down style={scrollToButtonStyles} />
    </Container>
  </Section>
)

IntroSection.contextTypes = contextTypes
