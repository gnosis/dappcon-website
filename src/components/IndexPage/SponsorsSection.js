import React from 'react'
import styled from 'styled-components'
import ContentWrapper from 'components/ContentWrapper'
import { colors } from 'theme'

const Wrapper = styled.section`
  padding-bottom: 194px;
  background: ${colors.bgWhite};

  @media screen and (max-width: 767px) {
    padding-bottom: 50px;
  }
`

const SponsorContainer = styled.ul`
  display: grid;
  justify-content: center;
  grid-auto-flow: column;
  grid-gap: 70px;

  @media screen and (max-width: 767px) {
    grid-gap: 20px;
  }
`

const Img = styled.img`
  max-width: 230px;
  width: auto;
  height: 80px;

  @media screen and (max-width: 767px) {
    max-width: 100px;
    height: 50px
  }
`

const Sponsor = styled.li``

const SponsorsSection = ({ sponsors }) => (
  <Wrapper id="conferenceSponsors">
    <ContentWrapper>
      <SponsorContainer>
        {sponsors.map(sponsor => (
          <Sponsor key={sponsor.name}>
            <a href={sponsor.url} target="_blank" rel="noopener noreferrer">
              <Img src={sponsor.image.publicURL} alt={sponsor.name} />
            </a>
          </Sponsor>
        ))}
      </SponsorContainer>
    </ContentWrapper>
  </Wrapper>
)

export default SponsorsSection
