import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { colors } from 'theme'
import HideOnMobile from 'components/HideOnMobile'
import ButtonLink from 'components/ButtonLink'
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

const StyledButtonLink = styled(ButtonLink)`
  margin: 0 auto;
  border: 3px solid ${colors.reddishPink};
  color: ${colors.reddishPink};
  font-size: 19px;
  padding: 6px 13px;
  display: block;
  width: 232px;
  margin: 116px auto 0;

  &:focus {
    color: ${colors.black};
    border-color: ${colors.black};
  }

  @media screen and (max-width: 767px) {
    font-size: 12px;
    padding: 13px 26px;
    margin-top: 50px;
    width: 190px;
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
      <StyledButtonLink
        href="mailto:sponsor@dappcon.io"
        text="BECOME A SPEAKER"
        hover={colors.secondaryBlack}
        style={{ zIndex: 2 }}
      />
      <StyledLink to="/">
        &lt;- <HideOnMobile>back to homepage</HideOnMobile>
      </StyledLink>
    </ContentWrapper>
  </StyledSection>
)

export default Speakers
