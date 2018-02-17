import React from 'react'

import { media } from 'types'

import { Section, Container, LargeHeading, ScrollToButton } from 'components'

import background from 'assets/backgrounds/home-page-intro.jpg'

const contextTypes = { media }

export const IntroSection = (props, { media }) => (
  <Section backgroundImage={background} cover fullHeight={media.largeUp}>
    <Container>
      <LargeHeading center>IntroSection</LargeHeading>
      <ScrollToButton />
    </Container>
  </Section>
)

IntroSection.contextTypes = contextTypes
