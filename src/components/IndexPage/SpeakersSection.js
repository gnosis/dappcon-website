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
`

const Speakers = Array(4).fill(4)

const SpeakersSection = ({ speakerPhoto }) => (
  <Wrapper>
    <ContentWrapper>
      <SpeakersContainer>
        {Speakers.map((_, i) => (
          <Speaker key={i} speakerPhoto={speakerPhoto} red={i === Speakers.length - 1} />
        ))}
      </SpeakersContainer>
      <StyledLink to="/speakers">See all confirmed speakers...</StyledLink>
    </ContentWrapper>
  </Wrapper>
)

export default SpeakersSection
