import React from 'react'
import styled from 'styled-components'
import ContentWrapper from 'components/ContentWrapper'
import { colors } from 'theme'
import { Link } from 'gatsby'
import Speaker from '../Speaker'

const Wrapper = styled.section`
  padding-top: 174px;
`

const SpeakersContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const StyledLink = styled(Link)`
  display: block;
  text-align: center;
  margin-top: 40px;
  color: ${colors.reddishPink};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

const SpeakersSection = ({ speakers }) => (
  <Wrapper>
    <ContentWrapper>
      <SpeakersContainer>
        {speakers.map(({ node: { frontmatter } }, i) => (
          <Speaker
            key={i}
            speaker={frontmatter}
          />
        ))}
      </SpeakersContainer>
      <StyledLink to="/speakers">See all confirmed speakers...</StyledLink>
    </ContentWrapper>
  </Wrapper>
)

export default SpeakersSection
