import React from "react"
import styled from "styled-components"
import ContentWrapper from "components/ContentWrapper"
import { colors } from "theme"

const Wrapper = styled.section`
  background: ${colors.bgWhite};
  position: relative;
  padding-bottom: 100px;
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`

const SLink = styled.a`
  border: solid 5px #000000;
  font-size: 32px;
  color: ${colors.black};
  text-decoration: none;
  font-weight: 800;
  padding: 10px;
  line-height: normal;
  text-align: center;
  box-sizing: border-box;

  &:hover {
    color: ${colors.reddishPink};
    border-color: ${colors.reddishPink};
  }

  @media screen and (max-width: 767px) {
    margin-top: 50px;
    font-size: 20px;
    width: 100%;
  }
`

const SText = styled.p`
  line-height: normal;
  flex-basis: 60%;

  @media screen and (max-width: 767px) {
    margin-top: 0;
  }
`

const CovidText = () => (
  <SText>
    Due to Covid-19, DappCon has been postponed. We will be in touch about plans
    for future events! If you’ve already purchased a ticket or have any
    questions, please contact us at info@dappcon.io.
  </SText>
)

const CovidUpdateSection = () => (
  <Wrapper>
    <ContentWrapper>
      <Container>
        <CovidText />
        <SLink
          target="_blank"
          href="https://dappcon.us17.list-manage.com/subscribe/post?u=a2cc3722b2ed0e98d568ca2d1&id=01165b3933"
        >
          Stay up to date
        </SLink>
      </Container>
    </ContentWrapper>
  </Wrapper>
)

export default CovidUpdateSection
