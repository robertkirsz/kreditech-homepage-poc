import React from 'react'

import { media } from 'types'

import { Section, Container, LargeHeading } from 'components'

import background from 'assets/backgrounds/home-page-intro.jpg'

const contextTypes = { media }

export const IntroSection = (props, { media }) => {
  console.log('media', media)
  return (
  <Section
    backgroundImage={background}
    cover
    fullHeight={media.largeUp}
  >
    <Container>
      <LargeHeading center>IntroSection</LargeHeading>
    </Container>
  </Section>
)}

IntroSection.contextTypes = contextTypes
