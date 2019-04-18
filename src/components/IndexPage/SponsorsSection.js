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
  grid-template-columns: ${props =>
    `repeat(${props.sponsorsAmount < 4 ? props.sponsorsAmount : 4}, 230px)`};
  grid-gap: 70px;

  @media screen and (max-width: 767px) {
    grid-gap: 20px;
    grid-template-columns: repeat(2, 130px);
  }
`

const Img = styled.img`
  max-width: 230px;
  width: auto;
  height: 80px;

  @media screen and (max-width: 767px) {
    max-width: 130px;
    height: 60px;
  }
`

const Sponsor = styled.li``

const SponsorsSection = ({ sponsors }) => (
  <Wrapper id="conferenceSponsors">
    <ContentWrapper>
      <SponsorContainer sponsorsAmount={sponsors.length}>
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
