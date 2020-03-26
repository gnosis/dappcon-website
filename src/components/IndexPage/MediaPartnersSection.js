import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import ContentWrapper from "components/ContentWrapper"
import Image from "components/PreviewCompatibleImage"
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
    flex-basis: 25%;
  }
`

const PartnersContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-basis: 65%;
`

const Partner = styled.a`
  max-height: 60px;

  @media screen and (max-width: 767px) {
    height: 30px;

    /* important is needed for overwriting gatsby styles  */
    &:first-child {
      & > div {
        width: 146px !important;
        height: 30px !important;
      }
    }

    &:nth-child(2) {
      & > div {
        width: 30px !important;
        height: 30px !important;
      }
    }
  }
`

const MediaPartnersSection = () => {
  const data = useStaticQuery(graphql`
    query {
      epicenter: file(relativePath: { eq: "epicenter_logo.png" }) {
        childImageSharp {
          fixed(quality: 100, height: 48) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      intoTheEther: file(relativePath: { eq: "ETHHUB_Podcast_3000px.png" }) {
        childImageSharp {
          fixed(quality: 100, height: 60) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `)

  return (
    <Wrapper>
      <ContentWrapper>
        <Container>
          <Title>Media Partners</Title>
          <PartnersContainer>
            <Partner href="https://epicenter.tv/" target="_blank" rel="noopener noreferrer">
              <Image image={data.epicenter} />
            </Partner>
            <Partner href="https://podcast.ethhub.io/" target="_blank" rel="noopener noreferrer">
              <Image image={data.intoTheEther} />
            </Partner>
          </PartnersContainer>
        </Container>
      </ContentWrapper>
    </Wrapper>
  )
}

export default MediaPartnersSection
