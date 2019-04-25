import React from 'react'
import styled from 'styled-components'
import Button from 'components/Button'
import ContentWrapper from 'components/ContentWrapper'
import { colors } from 'theme'

const Wrapper = styled.section`
  padding-bottom: 95px;
  background: ${colors.bgWhite};

  @media screen and (max-width: 767px) {
    padding-bottom: 50px;
  }
`

const SponsorByTypeContainer = styled.div`
  h3 {
    font-size: 19px;
    font-weight: 800;
    margin-bottom: 12px;
  }

  text-align: center;
  margin-bottom: 56px;
`

const SponsorList = styled.ul`
  display: grid;
  justify-content: center;
  grid-template-columns: ${props =>
    `repeat(${props.sponsorsAmount < 4 ? props.sponsorsAmount : 4}, 230px)`};
  grid-gap: 70px;

  @media screen and (max-width: 767px) {
    grid-gap: 20px;
    grid-template-columns: ${props =>
      `repeat(${props.sponsorsAmount < 2 ? props.sponsorsAmount : 2}, 130px)`};
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
const ButtonLink = styled.a`
  display: block;
  width: 232px;
  margin: 0 auto;

  @media screen and (max-width: 767px) {
    width: 190px;
  }
`

const StyledButton = styled(Button)`
  margin: 0 auto;
  border: 3px solid ${colors.reddishPink};
  color: ${colors.reddishPink};
  font-size: 19px;
  padding: 6px 13px;

  @media screen and (max-width: 767px) {
    font-size: 12px;
    padding: 13px 26px;
  }
`

const Sponsor = styled.li``

const SponsorsListByType = ({ type, sponsors }) =>
  sponsors.length ? (
    <SponsorByTypeContainer>
      <h3>{type} Sponsors</h3>
      <SponsorList sponsorsAmount={sponsors.length}>
        {sponsors.map(sponsor => (
          <Sponsor key={sponsor.name}>
            <a href={sponsor.url} target="_blank" rel="noopener noreferrer">
              <Img src={sponsor.image.publicURL} alt={sponsor.name} />
            </a>
          </Sponsor>
        ))}
      </SponsorList>
    </SponsorByTypeContainer>
  ) : null

const SponsorsSection = ({ sponsors }) => {
  const goldSponsors = []
  const silverSponsors = []
  const bronzeSponsors = []
  const ironSponsors = []

  for (let sponsor of sponsors) {
    if (sponsor.type === 4) {
      goldSponsors.push(sponsor)
    }

    if (sponsor.type === 3) {
      silverSponsors.push(sponsor)
    }

    if (sponsor.type === 2) {
      bronzeSponsors.push(sponsor)
    }

    if (sponsor.type === 1) {
      ironSponsors.push(sponsor)
    }
  }

  return (
    <Wrapper id="conferenceSponsors">
      <ContentWrapper>
        <SponsorsListByType type="Gold" sponsors={goldSponsors} />
        <SponsorsListByType type="Silver" sponsors={silverSponsors} />
        <SponsorsListByType type="Bronze" sponsors={bronzeSponsors} />
        <SponsorsListByType type="Iron" sponsors={ironSponsors} />
        <ButtonLink href="mailto:sponsor@dappcon.io" rel="noopener noreferrer" style={{ zIndex: 2 }}>
          <StyledButton text="BECOME A SPONSOR" hover={colors.secondaryBlack} />
        </ButtonLink>
      </ContentWrapper>
    </Wrapper>
  )
}

export default SponsorsSection
