import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

import { Div, Container, Row, Col, Badge } from 'components'

import kreditechLogo from 'assets/logos/kreditech.svg'
import hamburgerIcon from 'assets/icons/hamburger.svg'

export const Header = connect(({ layout }) => ({
  isNavbarVisible: layout.isNavbarVisible
}))(props => (
  <Wrapper padding="30px 0" visible={props.isNavbarVisible}>
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
          <StyledNavLink to="/carrers" style={{ marginLeft: 'auto' }}>
            Carrers <Badge>35</Badge>
          </StyledNavLink>
          <StyledNavLink to="/investors">Investors</StyledNavLink>
          <StyledNavLink to="/contact">Contact us</StyledNavLink>
          <img src={hamburgerIcon} alt="" />
        </Col>
      </Row>
    </Container>
  </Wrapper>
))

const Wrapper = Div.withComponent('header').extend`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 10;
  transition: 0.4s;

  ${({ visible }) =>
    !visible &&
    `
    opacity: 0;
    pointer-events: none;
  `}
`

const StyledNavLink = styled(NavLink)`
  color: white;
  font-weight: 600;
  line-height: 24px;
`
