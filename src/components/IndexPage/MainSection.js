import React from 'react'
import styled from 'styled-components'
import { colors } from 'theme'
import Button from 'components/Button'
import ContentWrapper from 'components/ContentWrapper'
import BerlinLandscapeSvg from 'img/berlin-cityscape.svg'

const Wrapper = styled.section`
  height: 604px;
  position: relative;
  background-color: ${colors.reddishPink};
`

const StyledContentWrapper = styled(ContentWrapper)`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const MainHeading = styled.h1`
  font-size: 49px;
  color: ${colors.white};
  line-height: normal;
`

const SvgContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;

  img {
    position: absolute;
    bottom: 0;
  }
`

const ButtonDateContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 20px;
`

const StyledDate = styled.span `
  margin-left: 25px;
  color: ${colors.white};
  font-size: 20px;
  font-weight: 800;
  line-height: normal;
`

const StyledButton = styled(Button)`
  z-index: 2;
`

const MainSection = () => (
  <Wrapper>
    <StyledContentWrapper>
      <MainHeading>
        Developer Conference
        <br />
        for Ethereum Dapps &<br />
        Infrastructure
      </MainHeading>
      <ButtonDateContainer>
        <StyledButton text="BUY TICKETS" />
        <StyledDate>
          21. - 23. August 2019
          <br />
          in Berlin,
        </StyledDate>
      </ButtonDateContainer>
    </StyledContentWrapper>
    <SvgContainer>
      <img src={BerlinLandscapeSvg} alt="cityscape" />
    </SvgContainer>
  </Wrapper>
)

export default MainSection
