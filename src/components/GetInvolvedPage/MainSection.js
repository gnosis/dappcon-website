import React from 'react'
import styled from 'styled-components'
import { colors } from 'theme'
import ContentWrapper from 'components/ContentWrapper'

const Wrapper = styled.section`
  height: 100vh;
  position: relative;
  background-color: ${colors.reddishPink};
`

const Heading = styled.h1`
  font-size: 49px;
  color: ${colors.white};
  line-height: normal;
  font-weight: 800;
  max-width: 505px;

  @media screen and (max-width: 767px) {
    font-size: 30px;
    max-width: 279px;
  }
`

const MainSection = () => (
  <Wrapper>
    <ContentWrapper>
      <Heading>
        It’s Dappening!
        <br />
        Be part of
        <br />
        Dappcon 2019
      </Heading>
    </ContentWrapper>
  </Wrapper>
)

export default MainSection
