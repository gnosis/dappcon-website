import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { slide as Menu } from 'react-burger-menu'
import { Link } from 'gatsby'
import { MobileMenuIcon, DappconLogoSmall } from 'components/Svg'
import ButtonLink from 'components/ButtonLink'
import { colors } from 'theme'

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
    text-transform: uppercase;
  }
  .bm-menu-wrap {
    z-index: 1050;
    top: 0;
    /* important because react-burger-menu adds width: 300px style attr */
    @media screen and (max-width: 479px) {
      width: 100vw !important;
    }
  }
  .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
    top: 0;
    left: 0;
  }
`

const whiteColorSchemePages = ['/', '/get-involved']

const Wrapper = styled.div`
  ${burgerMenuStyle}

  @media screen and (min-width: 768px) {
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
  color: ${colors.bgWhite};
`

const StyledLink = styled(Link)`
  font-size: 19px;
  padding: 25px 0;
  text-align: center;
  color: ${colors.bgWhite};
  text-decoration: none;
  font-weight: 800;
`

const StyledButtonLink = styled(ButtonLink)`
  padding: 17px 73px;
  display: block;
  margin: 0 auto;
  font-size: 12px;
  border-width: 3px;
  margin-top: 25px;
  box-sizing: border-box;
  width: 230px;
  text-transform: uppercase;
`

const MobileHeader = ({ location: { pathname } = {}, data: { buyTicketsLink } }) => {
  const [isMenuOpen, toggleMenu] = useState(false)

  return (
    <Wrapper>
      <IconWrapper onClick={() => toggleMenu(!isMenuOpen)}>
        <MobileMenuIcon
          fill={whiteColorSchemePages.includes(pathname) ? colors.bgWhite : colors.reddishPink}
        />
      </IconWrapper>
      <Menu isOpen={isMenuOpen} right customBurgerIcon={false} customCrossIcon={false}>
        <NavigationWrapper>
          <Link to="/" onClick={() => toggleMenu(!isMenuOpen)}>
            <DappconLogoSmall fill={colors.bgWhite} />
          </Link>
          <Close type="button" onClick={() => toggleMenu(!isMenuOpen)}>
            ->
          </Close>
        </NavigationWrapper>
        <StyledLink to="/#about" onClick={() => toggleMenu(!isMenuOpen)}>
          About
        </StyledLink>
        <StyledLink to="/speakers" onClick={() => toggleMenu(!isMenuOpen)}>
          Speakers
        </StyledLink>
        <StyledLink to="/#conferenceSponsors" onClick={() => toggleMenu(!isMenuOpen)}>
          Sponsors
        </StyledLink>
        <StyledButtonLink href={buyTicketsLink} target="_blank" text="Buy tickets" />
      </Menu>
    </Wrapper>
  )
}

export default MobileHeader
