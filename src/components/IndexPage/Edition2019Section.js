import React from "react"
import styled from "styled-components"
import ContentWrapper from "components/ContentWrapper"
import ShowOnMobile from "components/ShowOnMobile"
import HideOnMobile from "components/HideOnMobile"
import { colors } from "theme"
import PlayButtonSvg from "assets/play-btn.svg"
import Video2019 from "./Video2019"
import Speaker from "../Speaker"

const Wrapper = styled.section`
  background: ${colors.bgWhite};
  position: relative;
  padding-bottom: 200px;
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
  flex-basis: 33%;

  @media screen and (max-width: 767px) {
    flex-direction: row;
    flex-basis: 100%;
    justify-content: space-between;
  }
`

const SVideoBtn = styled.a`
  display: flex;
  flex-direction: column;
  color: ${colors.reddishPink};
  justify-content: space-around;
  text-decoration: none;
  font-size: 12px;
  font-weight: 800;
  height: 100%;
`

const SLink = styled.a`
  border: solid 5px #000000;
  font-size: 32px;
  color: ${colors.black};
  text-decoration: none;
  font-weight: 800;
  padding: 10px;
  line-height: normal;

  &:hover {
    border-color: ${colors.reddishPink};
    color: ${colors.reddishPink};
  }

  @media screen and (max-width: 767px) {
    margin-top: 20px;
    font-size: 20px;
    width: 100%;
    text-align: center;
  }
`

const SText = styled.p`
  margin-top: 25px;
  line-height: normal;

  @media screen and (max-width: 767px) {
    margin-top: 0;
  }
`

const AboutDappConText = () => (
  <SText>
    DappCon is a nonprofit conference for the Ethereum ecosystem, focusing on
    decentralized tooling, foundational infrastructure and technical
    collaboration.
    <br />
    <br />
    Organized by developers, for developers, Dappcon provides the opportunity
    for co-creating the future of dapps while engaging the community in open
    critical discussions and experiential learning.
  </SText>
)

const Edition2019Section = ({ speakers }) => (
  <Wrapper id="edition2019">
    <ContentWrapper>
      <ShowOnMobile>
        <AboutDappConText />
      </ShowOnMobile>
      <Container>
        <SpeakersContainer>
          {speakers.map(({ node: { frontmatter } }, i) => {
            if (i === 2) {
              return (
                <React.Fragment key={i}>
                  <HideOnMobile>
                    <Speaker
                      key={i}
                      speaker={frontmatter}
                      hideDetails
                      disabled
                    />
                  </HideOnMobile>
                  <ShowOnMobile>
                    <SVideoBtn
                      href="https://youtu.be/ZoqTK6nJI9k"
                      target="_blank"
                    >
                      <img src={PlayButtonSvg} alt="Play video" />
                      Play
                      <br />
                      video
                    </SVideoBtn>
                  </ShowOnMobile>
                </React.Fragment>
              )
            }

            return (
              <Speaker key={i} speaker={frontmatter} hideDetails disabled />
            )
          })}
        </SpeakersContainer>
        <RCol>
          <SLink href="https://2019.dappcon.io">Check out Dappcon2019</SLink>
          <HideOnMobile>
            <AboutDappConText />
          </HideOnMobile>
        </RCol>
      </Container>
    </ContentWrapper>
    <Video2019 />
  </Wrapper>
)

export default Edition2019Section
