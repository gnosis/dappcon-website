import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { colors } from 'theme'
import { DappconLogoSmall } from 'components/Svg'

const StyledLogoLink = styled(Link)`
  position: fixed;
  top: 22px;
  left: 25px;
  z-index: 1;

  @media screen and (max-width: 767px) {
    position: absolute;
  }
`

const whiteColorSchemePages = ['/', '/get-involved', '/get-involved/']

const NavLogo = ({ fill, location: { pathname } = {}, setLinkRef }) => (
  <StyledLogoLink id="navLogo" to="/" title="Logo" innerRef={setLinkRef}>
    <DappconLogoSmall
      fill={
        fill || (whiteColorSchemePages.includes(pathname) ? colors.bgWhite : colors.reddishPink)
      }
    />
  </StyledLogoLink>
)

export default NavLogo
