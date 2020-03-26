import React from "react"
import styled, { css } from "styled-components"
import { colors } from "theme"
import HideOnMobile from "components/HideOnMobile"
import { Link } from "gatsby"

const StyledFooter = styled.footer`
  width: 100%;
  position: absolute;
  left: 12px;
  bottom: 14px;
  color: ${colors.bgWhite};
  font-size: 14px;
`

const LinksCSS = css`
  color: ${colors.bgWhite};
  text-decoration: ${props => (props.underline ? "underline" : "none")};
`

const StyledLink = styled(Link)`
  ${LinksCSS}
`

const CookieSettingsBtn = styled.button`
  background: none;
  border: none;
  color: ${colors.bgWhite};
  text-decoration: underline;
  font-size: 14px;
  padding: 0;
  cursor: pointer;
  font-family: Averta, sans-serif;
`

const MobileSplitter = styled.br`
  display: none;

  @media screen and (max-width: 767px) {
    display: inherit;
  }
`

const Footer = ({ setCookieBannerOpen }) => (
  <StyledFooter>
    <p>
      <span>2020 DAPPCON</span>
      <span> | </span>
      <StyledLink to="/imprint" underline>
        Imprint
      </StyledLink>
      <MobileSplitter />
      <HideOnMobile>
        <span> | </span>
      </HideOnMobile>
      <StyledLink to="/privacy-policy" underline>
        Privacy Policy
      </StyledLink>
      <span> | </span>
      <CookieSettingsBtn
        onClick={() => {
          setCookieBannerOpen(isOpen => !isOpen)
        }}
      >
        Cookie settings
      </CookieSettingsBtn>
    </p>
  </StyledFooter>
)

export default Footer
