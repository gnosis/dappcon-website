import React from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'gatsby'
import { TicketSVG } from 'components/Svg'
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

const StyledAnchor = styled.a`
  ${LinkCSS}
`

const StyledIconLink = styled.a`
  transform: rotate(-45deg);
  margin-top: 40px;
  margin-right: -10px;
`

const Navbar = ({ isBlack, setLinkRef, data }) => (
  <NavbarMenuContainer>
    <StyledLink id="aboutLink" isBlack={isBlack} to="/#about" innerRef={setLinkRef}>
      About
    </StyledLink>
    <StyledAnchor id="agendaLink" isBlack={isBlack} href="/agenda_1.pdf" ref={setLinkRef}>
      Agenda
    </StyledAnchor>
    <StyledLink id="speakersLink" isBlack={isBlack} to="/speakers" innerRef={setLinkRef}>
      Speakers
    </StyledLink>
    <StyledLink id="sponsorsLink" isBlack={isBlack} to="/#conferenceSponsors" innerRef={setLinkRef}>
      Sponsors
    </StyledLink>
    <StyledLink id="joinLink" isBlack={isBlack} to="/get-involved" innerRef={setLinkRef}>
      Join
    </StyledLink>
    <StyledIconLink
      id="buyLink"
      href={data.buyTicketsLink}
      target="_blank"
      rel="noopener noreferrer"
      rotate="45deg"
      ref={setLinkRef}
    >
      <TicketSVG
        fill={isBlack ? colors.black : colors.white}
        gStyle={{ transition: 'stroke 0.3s ease-out' }}
      />
    </StyledIconLink>
  </NavbarMenuContainer>
)

export default Navbar
