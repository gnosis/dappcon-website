import React from 'react'
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

  h3 {
    font-size: 49px;
    font-weight: 800;
    color: ${colors.white};
  }
`

const PhotoSection = ({ text }) => (
  <Wrapper>
    <h3>{text.label}</h3>
  </Wrapper>
)

export default PhotoSection
