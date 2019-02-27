import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { colors } from 'theme'
import photo from 'img/photo@2x.jpg'

const Wrapper = styled.div`
  height: 420px;
  background: url(${photo});
  background-size: cover;
  background-repeat: no-repeat;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 49px;

  h3 {
    font-weight: 800;
    color: ${colors.white};
  }

  @media screen and (max-width: 767px) {
    height: 167px;
    font-size: 20px;
  }
`

const StyledLink = styled(Link)`
  font-weight: 800;
  color: ${colors.white};
  text-decoration: none;
  transition: color 0.3s ease-out;

  &:hover {
    color: ${colors.veryLightPink};
  }
`

const PhotoSection = ({ text }) => (
  <Wrapper id="photo">
    {text.isLink ? <StyledLink to={text.linkURL}>{text.label}</StyledLink> : <h3>{text.label}</h3>}
  </Wrapper>
)

export default PhotoSection
