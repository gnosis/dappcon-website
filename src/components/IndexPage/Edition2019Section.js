import React from "react"
import styled from "styled-components"
import ContentWrapper from "components/ContentWrapper"
import { colors } from "theme"
import { Link } from "gatsby"
import Speaker from "../Speaker"

const Wrapper = styled.section`
  padding-top: 222px;
  background: ${colors.bgWhite};

  @media screen and (max-width: 767px) {
    padding-top: 62px;
  }
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`

const SpeakersContainer = styled.div`
  flex-basis: 60%;

  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(3, 100px);
  grid-row-gap: 71px;
`

const RCol = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 33%;
`

const Heading = styled.h3`
  font-size: 28px;
  font-weight: 800;
  color: ${colors.secondaryBlack};
`

const SLink = styled.a`
  color: ${colors.reddishPink};
  text-decoration: none;
  margin-top: 62px;
  max-width: 228px;
  font-weight: 800;

  &:hover {
    text-decoration: underline;
  }
`

const Edition2019Section = ({ speakers }) => (
  <Wrapper id="speakers">
    <ContentWrapper>
      <Container>
        <SpeakersContainer>
          {speakers.map(({ node: { frontmatter } }, i) => (
            <Speaker key={i} speaker={frontmatter} hideDetails />
          ))}
        </SpeakersContainer>
        <RCol>
          <Heading>Edition 2019</Heading>
          <SLink href="https://2019.dappcon.io">
            Check out the Dappcon 2019 Edition
          </SLink>
          <SLink href="https://2019.dappcon.io">
            Become a speaker at DappCon 2020
          </SLink>
        </RCol>
      </Container>
    </ContentWrapper>
  </Wrapper>
)

export default Edition2019Section
