import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { colors } from 'theme'

const Wrapper = styled.div`
  display: none;
  font-weight: 800;

  @media screen and (max-width: 767px) {
    display: flex;
    margin-bottom: 23px;
    font-size: 19px;
    color: ${colors.reddishPink};
  }
`

const Heading = styled.h4`
  margin-left: auto;
`

const StyledLink = styled(Link)`
  color: ${colors.reddishPink};
  text-decoration: none;
`

const MobilePageHeading = ({ text, ...props }) => (
  <Wrapper {...props}>
    <StyledLink to="/">&lt;-</StyledLink>
    <Heading>{text}</Heading>
  </Wrapper>
)

export default MobilePageHeading
