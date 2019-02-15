import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { TicketSVG } from 'components/Svg'
import { colors } from 'theme'

const NavbarMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  box-orient: vertical;
  top: 0;
  right: 25px;
  position: fixed;
  width: 50px;
  height: 604px;
  z-index: 1;
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

{
  /* Hamburger menu */
}
{
  /* <div className="navbar-burger burger" data-target="navMenu">
              <span />
              <span />
              <span />
            </div> */
}

const Navbar = class extends React.Component {
  render() {
    return (
      <NavbarMenuContainer>
        <StyledLink to="/about">About</StyledLink>
        <StyledLink to="/products">Programm</StyledLink>
        <StyledLink to="/contact">Speakers</StyledLink>
        <StyledLink to="/contact/examples">Organizers</StyledLink>
        <StyledLink to="/contact/examples">Sponsor</StyledLink>
        <StyledIconLink to="/contact/examples" rotate="45deg">
          <TicketSVG />
        </StyledIconLink>
      </NavbarMenuContainer>
    )
  }
}

export default Navbar
