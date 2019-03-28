import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { colors } from 'theme'
import HideOnMobile from 'components/HideOnMobile'
import ContentWrapper from 'components/ContentWrapper'
import MobilePageHeading from 'components/MobilePageHeading'
import Speaker from 'components/Speaker'

const StyledSection = styled.section`
  padding: 141px 0 71px;
  background: ${colors.bgWhite};

  @media screen and (max-width: 767px) {
    padding: 106px 0 46px;
  }
`

const SpeakersContainer = styled.div`
  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(4, 134px);
  grid-row-gap: 71px;

  @media screen and (max-width: 767px) {
    grid-template-columns: repeat(3, 64px);
    grid-row-gap: 41px;
  }
`

const StyledLink = styled(Link)`
  display: block;
  margin-top: 76px;
  color: ${colors.reddishPink};
  text-decoration: none;
  font-size: 19px;
  cursor: pointer;

  @media screen and (max-width: 767px) {
    margin-top: 25px;
  }
`

const Speakers = ({ speakers }) => (
  <StyledSection>
    <ContentWrapper>
      <MobilePageHeading text="Speakers" />
      <SpeakersContainer>
        {speakers.map(({ node: { frontmatter } }, i) => (
          <Speaker key={i} speaker={frontmatter} showInfo />
        ))}
      </SpeakersContainer>
      <StyledLink to="/">
        &lt;- <HideOnMobile>back to homepage</HideOnMobile>
      </StyledLink>
    </ContentWrapper>
  </StyledSection>
)

export default Speakers
