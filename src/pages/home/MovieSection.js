import React from 'react'

import { Section, Container, Button } from 'components'

export const MovieSection = () => (
  <StyledSection>
    <Container>
      <Button>Learn more about our solutions</Button>
    </Container>
  </StyledSection>
)

const StyledSection = Section.extend`
  background: #D9EBF9;
`
