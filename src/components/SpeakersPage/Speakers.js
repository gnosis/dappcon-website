import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { colors } from 'theme'
import ContentWrapper from 'components/ContentWrapper'
import Speaker from 'components/Speaker'

const StyledSection = styled.section`
  padding: 141px 0 71px;
`

const SpeakersContainer = styled.div`
  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(4, 134px);
  grid-row-gap: 71px;
`

const StyledLink = styled(Link)`
  display: block;
  margin-top: 76px;
  color: ${colors.reddishPink};
  text-decoration: none;
  font-size: 19px;
`

const Speakers = ({ speakers }) => (
  <StyledSection>
    <ContentWrapper>
      <SpeakersContainer>
        {speakers.map(({ node: { frontmatter } }, i) => (
          <Speaker key={i} speaker={frontmatter} showInfo />
        ))}
      </SpeakersContainer>
      <StyledLink to="/">← back to homepage</StyledLink>
    </ContentWrapper>
  </StyledSection>
)

export default Speakers
