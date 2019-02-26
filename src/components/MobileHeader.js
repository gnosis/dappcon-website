import React, { useState } from 'react'
import styled from 'styled-components'
import { slide as Menu } from 'react-burger-menu'
import { Link } from 'gatsby'
import { MobileMenuIcon } from 'components/Svg'

const Wrapper = styled.div`
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
      <Menu isOpen={isMenuOpen} slide="right">
        <Link to="/">Boo</Link>
      </Menu>
    </Wrapper>
  )
}

export default MobileHeader
