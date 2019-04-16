import React from 'react'
import styled from 'styled-components'
import ContentWrapper from 'components/ContentWrapper'
import ImgComponent from 'components/PreviewCompatibleImage'
import { colors } from 'theme'

const Wrapper = styled.section`
  padding-bottom: 194px;
  background: ${colors.bgWhite};
`

const SponsorContainer = styled.ul`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(2, 230px);
  grid-gap: 30px;
`

const Img = styled.img`
  max-width: 230px;
  width: auto;
  height: 80px;
`

const Sponsor = styled.li``

const SponsorsSection = ({ sponsors }) => (
  <Wrapper id="conferenceSponsors">
    <ContentWrapper>
      <SponsorContainer>
        {sponsors.map(sponsor => (
          <Sponsor key={sponsor.name}>
            <a href={sponsor.url} target="_blank">
              <Img src={sponsor.image.publicURL} alt={sponsor.name} />
            </a>
          </Sponsor>
        ))}
      </SponsorContainer>
    </ContentWrapper>
  </Wrapper>
)

export default SponsorsSection
