import React from "react"
import styled from "styled-components"
import ContentWrapper from "components/ContentWrapper"
import HideOnMobile from "components/HideOnMobile"
import { colors } from "theme"
import Speaker from "../Speaker"

const Wrapper = styled.section`
  padding-top: 200px;
  background: ${colors.bgWhite};

  @media screen and (max-width: 767px) {
    padding-top: 120px;
  }
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 767px) {
    flex-direction: column-reverse;
  }
`

const SpeakersContainer = styled.div`
  flex-basis: 60%;

  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(3, 100px);
  grid-row-gap: 71px;

  @media screen and (max-width: 767px) {
    grid-template-columns: repeat(3, 64px);
    grid-row-gap: 41px;

    margin-top: 30px;
  }
`

const RCol = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 767px) {
    flex-direction: row;
    flex-basis: 100%;
    justify-content: space-between;
  }
`

const Heading = styled.h3`
  font-size: 28px;
  font-weight: 800;
  color: ${colors.secondaryBlack};
`

const MobileHeading = styled(Heading)`
  @media screen and (min-width: 767px) {
    display: none;
  }
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

  @media screen and (max-width: 767px) {
    margin-top: 20px;
    flex-basis: 40%;
  }
`

const Edition2019Section = ({ speakers }) => (
  <Wrapper id="edition2019">
    <ContentWrapper>
      <MobileHeading>Speakers 2019</MobileHeading>
      <Container>
        <SpeakersContainer>
          {speakers.map(({ node: { frontmatter } }, i) => (
            <Speaker key={i} speaker={frontmatter} hideDetails />
          ))}
        </SpeakersContainer>
        <RCol>
          <HideOnMobile>
            <Heading>Speakers 2019</Heading>
          </HideOnMobile>
          <SLink href="https://2019.dappcon.io">
            Check out the DappCon 2019 Edition
          </SLink>
          <SLink href="https://gnosis1.typeform.com/to/u8cTBg">
            Want to become a speaker at DappCon 2020? Submit your proposal today
          </SLink>
        </RCol>
      </Container>
    </ContentWrapper>
  </Wrapper>
)

export default Edition2019Section
