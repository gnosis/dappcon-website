import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { DappconLogoSmall, TicketSVG } from 'components/Svg'
import { colors } from 'theme'

const Nav = styled.nav`
  position: fixed;
  width: 100vw;
  height: 604px;
  z-index: 1;
`

const NavbarMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  box-orient: vertical;
  position: absolute;
  top: 0;
  right: 25px;
`

const StyledLink = styled(Link)`
  writing-mode: vertical-lr;
  margin-top: 25px;
  font-size: 19px;
  color: ${colors.white};
`

const StyledIconLink = styled(Link)`
  transform: rotate(-45deg);
  margin-top: 40px;
`

const StyledLogoLink = styled(Link)`
  position: absolute;
  top: 22px;
  left: 25px;
`

const Navbar = class extends React.Component {
  render() {
    return (
      <Nav>
        <StyledLogoLink to="/" title="Logo">
          <DappconLogoSmall />
        </StyledLogoLink>
        <NavbarMenuContainer>
          <StyledLink to="/about">About</StyledLink>
          <StyledLink to="/products">Programm</StyledLink>
          <StyledLink to="/contact">Speakers</StyledLink>
          <StyledLink to="/contact/examples">Organizers</StyledLink>
          <StyledLink to="/contact/examples">Sponsor</StyledLink>
          <StyledIconLink to="/contact/examples" rotate="45deg"><TicketSVG /></StyledIconLink>
        </NavbarMenuContainer>
        {/* Hamburger menu */}
        {/* <div className="navbar-burger burger" data-target="navMenu">
              <span />
              <span />
              <span />
            </div> */}
      </Nav>
    )
  }
}

export default Navbar
