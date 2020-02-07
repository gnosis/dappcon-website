import React from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'gatsby'
import { colors } from 'theme'

const NavbarMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  box-orient: vertical;
  top: 0;
  right: 30px;
  position: fixed;
  width: 50px;
  height: 404px;
  z-index: 1;

  @media screen and (max-width: 767px) {
    display: none;
  }
`

const LinkCSS = css`
  writing-mode: vertical-lr;
  margin-top: 25px;
  font-size: 19px;
  color: ${props => (props.isBlack ? colors.black : colors.white)};
  text-decoration: none;
  padding-right: 10px;
  font-weight: 800;
  transition: color 0.3s ease-out;

  &:hover {
    color: ${props => (props.isBlack ? colors.reddishPink : colors.black)};
  }
`

const StyledLink = styled(Link)`
  ${LinkCSS}
`

const Navbar = ({ isBlack, setLinkRef, data }) => (
  <NavbarMenuContainer>
    <StyledLink id="dappsLink" isBlack={isBlack} to="/#dapps" innerRef={setLinkRef}>
      Dapps
    </StyledLink>
    {/* <StyledLink id="speakersLink" isBlack={isBlack} to="/speakers" innerRef={setLinkRef}>
      Speakers
    </StyledLink> */}
    <StyledLink id="sponsorsLink" isBlack={isBlack} to="/#conferenceSponsors" innerRef={setLinkRef}>
      Sponsors
    </StyledLink>
    <StyledLink id="ticketsLink" isBlack={isBlack} to="/get-involved" innerRef={setLinkRef}>
      Tickets
    </StyledLink>
  </NavbarMenuContainer>
)

export default Navbar
