import React from "react"
import styled from "styled-components"
import ContentWrapper from "components/ContentWrapper"
import { colors } from "theme"

const Wrapper = styled.section`
  padding: 200px 0;
  background: ${colors.bgWhite};

  @media screen and (max-width: 767px) {
    padding: 120px 0;
  }
`

const Container = styled.div`
  height: 127px;
  border-radius: 5px;
  background-color: #000;
  padding: 0 32px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 767px) {
    padding: 0 10px;
    font-size: 10px;
    height: 63px;
  }
`

const Title = styled.h3`
  color: ${colors.bgWhite};
  font-weight: 800;
  flex-basis: 20%;

  @media screen and (max-width: 767px) {
    flex-basis: 30%;
  }
`

const PartnersContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-basis: 60%;
`

const Partner = styled.div`
  width: 60px;
  height: 60px;
  background-color: ${colors.bgWhite};
  border-radius: 5px;

  @media screen and (max-width: 767px) {
    width: 30px;
    height: 30px;
  }
`

const MediaPartnersSection = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <Container>
          <Title>Media Partners</Title>
          <PartnersContainer>
            <Partner />
            <Partner />
          </PartnersContainer>
        </Container>
      </ContentWrapper>
    </Wrapper>
  )
}

export default MediaPartnersSection
