import React from "react"
import styled from "styled-components"
import Markdown from "react-markdown"
import { colors } from "theme"
import ContentWrapper from "components/ContentWrapper"

const Wrapper = styled.section`
  background-color: ${colors.reddishPink};
`

const StyledContentWrapper = styled(ContentWrapper)`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Heading = styled(Markdown)`
  font-size: 49px;
  color: ${colors.white};
  line-height: normal;
  font-weight: 800;
  max-width: 505px;
  z-index: 1;
  margin-top: 135px;

  @media screen and (max-width: 767px) {
    font-size: 30px;
    max-width: 279px;
  }
`

const MainSection = ({ title }) => (
  <Wrapper>
    <StyledContentWrapper>
      <Heading source={title}></Heading>
    </StyledContentWrapper>
  </Wrapper>
)

export default MainSection
