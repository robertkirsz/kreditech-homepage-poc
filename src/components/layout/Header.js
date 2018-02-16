import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

import { media } from 'types'
import { Div, Container, Row, Col } from 'components'

import kreditechLogo from 'assets/logos/kreditech.svg'
import hamburgerIcon from 'assets/icons/hamburger.svg'

export const Header = (props, { media }) => (
  <Wrapper padding="30px 0">
    <Container>
      <Row>
        <Col small={3}>
          <NavLink to="/">
            <img src={kreditechLogo} alt="" />
          </NavLink>
        </Col>
        <Col small listRight={30} itemsCenter>
          <StyledNavLink to="/people">People</StyledNavLink>
          <StyledNavLink to="/solutions">Solutions</StyledNavLink>
          <StyledNavLink to="/company">Company</StyledNavLink>
          <StyledNavLink to="/carrers" style={{ marginLeft: 'auto' }}>Carrers</StyledNavLink>
          <StyledNavLink to="/investors">Investors</StyledNavLink>
          <StyledNavLink to="/contact">Contact us</StyledNavLink>
          <img src={hamburgerIcon} alt="" />
        </Col>
      </Row>
    </Container>
  </Wrapper>
)

Header.contextTypes = { media }

const Wrapper = Div.withComponent('header').extend`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
`

const StyledNavLink = styled(NavLink)`
  color: white;
  font-weight: 600;
  line-height: 24px;
`
