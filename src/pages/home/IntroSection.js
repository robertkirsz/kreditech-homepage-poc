import React from 'react'

import { media } from 'types'

import {
  Div,
  Section,
  Container,
  LargeHeading,
  Subheading,
  Button,
  HiringBox,
  Boxes,
  ScrollToButton
} from 'components'

import background from 'assets/backgrounds/home-page-intro.jpg'

const scrollToButtonStyles = {
  position: 'absolute',
  bottom: 36,
  left: '50%',
  marginLeft: -25
}

export const IntroSection = (props, { media }) => (
    <Section
      backgroundImage={background}
      cover
      fullHeight={media.largeUp}
      innerRef={props.innerRef}
    >
      <Container>
        <Div
          relative
          z={1}
          column
          itemsCenter
          selfCenter
          margin="16px 24px"
          maxWidth={650}
        >
          <LargeHeading light center shadow>
            Hola!<br />
            We’re redefining how the world finances
          </LargeHeading>

          <Subheading light center shadow mTop={24}>
            Building better access to credit, through technology
          </Subheading>

          <Button mTop={36}>Get to know us</Button>

          <HiringBox light selfStart mTop={88} />

          <Boxes top={-40} left={-70} />
        </Div>

        <ScrollToButton down style={scrollToButtonStyles} />
      </Container>
    </Section>
  )

IntroSection.contextTypes = { media }
