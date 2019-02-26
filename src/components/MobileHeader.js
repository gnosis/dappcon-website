import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { slide as Menu } from 'react-burger-menu'
import { Link } from 'gatsby'
import { MobileMenuIcon } from 'components/Svg'
import NavLogo from 'components/NavLogo'
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
`

const MobileHeader = () => {
  const [isMenuOpen, toggleMenu] = useState(false)

  return (
    <Wrapper>
      <IconWrapper onClick={() => toggleMenu(!isMenuOpen)}>
        <MobileMenuIcon />
      </IconWrapper>
      <Menu isOpen={isMenuOpen} right customBurgerIcon={false} customCrossIcon={false}>
        <NavLogo fill={colors.bgWhite} />
        <Link to="/">Boo</Link>
      </Menu>
    </Wrapper>
  )
}

export default MobileHeader
