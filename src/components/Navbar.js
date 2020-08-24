import React from "react"
import styled, { css } from "styled-components"
import { Link } from "gatsby"
import { TelegramIcon, TwitterIcon, EmailIcon } from "components/Svg"
import { colors } from "theme"

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

  @media screen and (max-width: 999px) {
    display: none;
  }
`

const LinkCSS = css`
  writing-mode: vertical-lr;
  margin-top: 25px;
  font-size: 19px;
  color: ${(props) => (props.isBlack ? colors.black : colors.white)};
  text-decoration: none;
  padding-right: 10px;
  font-weight: 800;
  transition: color 0.3s ease-out;

  &:hover {
    color: ${(props) => (props.isBlack ? colors.reddishPink : colors.black)};
  }
`

const StyledLink = styled(Link)`
  ${LinkCSS}
`

const SExternalLink = styled.a`
  ${LinkCSS}
`

const SImgLink = styled.a`
  margin-top: 25px;
  margin-right: -2px;
`

const Navbar = ({ isBlack, setLinkRef, data }) => (
  <NavbarMenuContainer>
    {/* <StyledLink
      id="dappsLink"
      isBlack={isBlack}
      to="/dapps"
      innerRef={setLinkRef}
    >
      Dapps
    </StyledLink>
    <StyledLink
      id="speakersLink"
      isBlack={isBlack}
      to="/#edition2019"
      innerRef={setLinkRef}
    >
      Speakers
    </StyledLink>
    <SExternalLink
      id="sponsorsLink"
      isBlack={isBlack}
      href="/DappCon2020SponsorshipPackages.pdf"
      target="_blank"
      ref={setLinkRef}
    >
      Sponsors
    </SExternalLink>
    <StyledLink
      id="ticketsLink"
      isBlack={isBlack}
      to="/tickets"
      innerRef={setLinkRef}
    >
      Tickets
    </StyledLink> */}
    <SImgLink
      isBlack={isBlack}
      href="https://twitter.com/dappcon_berlin"
      target="_blank"
      ref={setLinkRef}
      id="twitterLink"
    >
      <TwitterIcon fill={isBlack ? colors.black : colors.white} />
    </SImgLink>
    <SImgLink
      isBlack={isBlack}
      href="https://t.me/joinchat/EcVRsUPKJRYHbrijhd_Cbw"
      target="_blank"
      ref={setLinkRef}
      id="tgLink"
    >
      <TelegramIcon fill={isBlack ? colors.black : colors.white} />
    </SImgLink>
    <SImgLink
      isBlack={isBlack}
      href="mailto:info@dappcon.io"
      target="_blank"
      ref={setLinkRef}
      id="emailLink"
    >
      <EmailIcon fill={isBlack ? colors.black : colors.white} />
    </SImgLink>
  </NavbarMenuContainer>
)

export default Navbar
