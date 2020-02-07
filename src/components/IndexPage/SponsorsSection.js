import React from "react"
import styled from "styled-components"
import ContentWrapper from "components/ContentWrapper"
import { colors } from "theme"

const Wrapper = styled.section`
  padding: 120px 0 95px;
  background: ${colors.bgWhite};

  @media screen and (max-width: 767px) {
    padding: 30px 0 50px;
  }
`

const SponsorByTypeContainer = styled.div`
  h3 {
    font-size: 19px;
    font-weight: 800;
    width: 25%;

    @media screen and (max-width: 767px) {
      width: 33%;
      font-size: 16px;
    }
  }

  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 56px;

  &:not(:last-child) {
    &:after {
      content: "";
      width: 100%;
      border-bottom: solid 1px #979797;
      position: absolute;
      left: 0;
      bottom: -25px;
    }
  }
`

const SponsorList = styled.ul`
  display: grid;
  justify-content: center;
  direction: rtl;
  align-items: center;
  grid-template-columns: repeat(3, 115px);
  grid-gap: 70px;

  @media screen and (max-width: 767px) {
    grid-gap: 20px;
    grid-template-columns: repeat(2, 88px);
  }
`

const Img = styled.img`
  max-width: 115px;
  width: auto;
  max-height: 80px;

  @media screen and (max-width: 767px) {
    max-width: 88px;
    max-height: 60px;
  }
`

const BottomTextContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const Sponsor = styled.li``

const SponsorsListByType = ({ type, sponsors }) =>
  sponsors.length ? (
    <SponsorByTypeContainer>
      <h3>{type}</h3>
      <SponsorList sponsorsAmount={sponsors.length}>
        {sponsors.map((sponsor, index) => (
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
        <div>
          <SponsorsListByType type="Unicorns" sponsors={goldSponsors} />
          <SponsorsListByType type="Whales" sponsors={silverSponsors} />
          <SponsorsListByType type="Kitties" sponsors={bronzeSponsors} />
          <SponsorsListByType type="Knuts" sponsors={ironSponsors} />
        </div>
        <BottomTextContainer>
          <p>become a sponsor</p>
          <p>download package</p>
        </BottomTextContainer>
      </ContentWrapper>
    </Wrapper>
  )
}

export default SponsorsSection
