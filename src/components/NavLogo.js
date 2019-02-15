import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { DappconLogoSmall } from 'components/Svg'

const StyledLogoLink = styled(Link)`
  position: fixed;
  top: 22px;
  left: 25px;
  z-index: 1;
`

const Navbar = () => (
  <StyledLogoLink to="/" title="Logo">
    <DappconLogoSmall />
  </StyledLogoLink>
)

export default Navbar
