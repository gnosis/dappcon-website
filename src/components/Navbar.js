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

  @media screen and (max-width: 767px) {
    display: none;
  }
`

const StyledLink = styled(Link).attrs(({ isBlack }) => ({
  color: isBlack ? colors.black : colors.white,
  hoverColor: isBlack ? colors.reddishPink : colors.black
}))`
  writing-mode: vertical-lr;
  margin-top: 25px;
  font-size: 19px;
  color: ${props => props.color};
  text-decoration: none;
  padding-right: 10px;
  font-weight: 800;
  transition: color 0.3s ease-out;

  &:hover {
    color: ${props => props.hoverColor};
  }
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
    const { location = {} } = this.props
    const isBlack = location.pathname !== '/'

    return (
      <NavbarMenuContainer>
        <StyledLink isBlack={isBlack} to="/#about">
          About
        </StyledLink>
        {/* <StyledLink isBlack={isBlack} to="/program">
          Programm
        </StyledLink> */}
        <StyledLink isBlack={isBlack} to="/speakers">
          Speakers
        </StyledLink>
        <StyledLink isBlack={isBlack} to="/#gnosis">
          Organizer
        </StyledLink>
        {/* <StyledLink isBlack={isBlack} to="/#sponsors">
          Sponsors
        </StyledLink> */}
        <StyledIconLink to="/contact/examples" rotate="45deg">
          <TicketSVG fill={isBlack ? colors.black : colors.bgWhite} />
        </StyledIconLink>
      </NavbarMenuContainer>
    )
  }
}

export default Navbar
