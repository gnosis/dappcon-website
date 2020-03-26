import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { DappconLogoSmall } from 'components/Svg'

const SLogoLink = styled(Link)`
  position: fixed;
  top: 22px;
  left: 25px;
  z-index: 1;

  @media screen and (max-width: 767px) {
    position: absolute;
  }
`

const NavLogo = ({ setLinkRef }) => (
  <SLogoLink id="navLogo" to="/" title="Logo" innerRef={setLinkRef}>
    <DappconLogoSmall />
  </SLogoLink>
)

export default NavLogo
