import React, { useState } from "react"
import styled, { css } from "styled-components"
import { slide as Menu } from "react-burger-menu"
import { Link } from "gatsby"
import { MobileMenuIcon, DappconLogoSmall } from "components/Svg"
import RightArrow from "assets/arrow-right.svg"
import { colors } from "theme"

const burgerMenuStyle = css`
  .bm-burger-button {
    position: absolute;
    width: 35px;
    height: 41px;
    right: 20px;
    top: 24px;
    z-index: auto !important;
    /* !important is here because it adds zIndex 1000 in the code and it conflicts with modal close button */
  }
  .bm-burger-bars {
    background: #373a47;
  }
  .bm-cross-button {
    height: 24px;
    width: 24px;
  }
  .bm-cross {
    background: #bdc3c7;
  }
  .bm-menu {
    background: ${colors.reddishPink};
  }
  .bm-morph-shape {
    fill: #373a47;
  }
  .bm-item-list {
    color: #b8b7ad;
  }
  .bm-item {
    display: inline-block;

    &:focus {
      color: ${colors.black};
      outline: none;
    }
  }
  .bm-menu-wrap {
    z-index: 1050;
    top: 0;
    /* important because react-burger-menu adds width: 300px style attr */
    @media screen and (max-width: 1000px) {
      width: 100vw !important;
    }
  }
  .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
    top: 0;
    left: 0;
  }
`

const whiteColorSchemePages = ["/tickets", "/tickets/"]

const Wrapper = styled.div`
  ${burgerMenuStyle}

  @media screen and (min-width: 1000px) {
    display: none;
  }
`

const IconWrapper = styled.div`
  position: absolute;
  padding: 15px;
  top: 10px;
  right: 0;
  z-index: 1;
`

const NavigationWrapper = styled.div`
  /* important because react-burger-menu adds display: block style attr */
  display: flex !important;
  width: 100%;
  padding: 22px 25px 35px;
  box-sizing: border-box;
`

const Close = styled.button`
  padding: 10px;
  font-weight: 800;
  margin-left: auto;
  font-size: 22px;
  background: transparent;
  border: none;
`

const LinkCSS = css`
  font-size: 37px;
  padding: 25px 15px;
  text-align: left;
  color: ${colors.black};
  text-decoration: none;
  font-weight: 800;
`

const Arrow = ({ className, style, onClick, isRightArrow }) => (
  <img
    src={RightArrow}
    className={className}
    style={style}
    onClick={onClick}
    width="24px"
    alt="Arrow"
    onKeyDown={onClick}
  />
)

const StyledAnchor = styled.a`
  ${LinkCSS}
`

const MobileHeader = ({
  location: { pathname } = {},
  data: { buyTicketsLink },
}) => {
  const [isMenuOpen, toggleMenu] = useState(false)

  return (
    <Wrapper>
      <IconWrapper onClick={() => toggleMenu(!isMenuOpen)}>
        <MobileMenuIcon
          fill={
            whiteColorSchemePages.includes(pathname)
              ? colors.bgWhite
              : colors.reddishPink
          }
        />
      </IconWrapper>
      <Menu
        isOpen={isMenuOpen}
        right
        customBurgerIcon={false}
        customCrossIcon={false}
      >
        <NavigationWrapper>
          <Link to="/" onClick={() => toggleMenu(!isMenuOpen)}>
            <DappconLogoSmall fill={colors.black} />
          </Link>
          <Close type="button" onClick={() => toggleMenu(!isMenuOpen)}>
            <Arrow />
          </Close>
        </NavigationWrapper>
        {/* <StyledLink to="/dapps" onClick={() => toggleMenu(!isMenuOpen)}>
          Dapps
        </StyledLink>
        <StyledLink to="/#edition2019" onClick={() => toggleMenu(!isMenuOpen)}>
          Speakers
        </StyledLink> */}
        <StyledAnchor
          href="https://2019.dappcon.io"
          target="_blank"
          onClick={() => toggleMenu(!isMenuOpen)}
        >
          Dappcon 2019
        </StyledAnchor>
        <StyledAnchor
          href="https://twitter.com/dappcon_berlin"
          target="_blank"
          onClick={() => toggleMenu(!isMenuOpen)}
        >
          Twitter
        </StyledAnchor>
        <StyledAnchor
          href="https://t.me/joinchat/EcVRsUPKJRYHbrijhd_Cbw"
          target="_blank"
          onClick={() => toggleMenu(!isMenuOpen)}
        >
          Telegram
        </StyledAnchor>
        <StyledAnchor
          href="mailto:info@dappcon.i"
          target="_blank"
          onClick={() => toggleMenu(!isMenuOpen)}
        >
          E-mail
        </StyledAnchor>
      </Menu>
    </Wrapper>
  )
}

export default MobileHeader
