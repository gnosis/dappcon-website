import React from 'react'
import styled from 'styled-components'
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

const Speakers = ({ speakerPhoto }) => (
  <StyledSection>
    <ContentWrapper>
      <SpeakersContainer>
        {Array(24)
          .fill(24)
          .map((_, i) => (
            <Speaker key={i} speakerPhoto={speakerPhoto} />
          ))}
      </SpeakersContainer>
    </ContentWrapper>
  </StyledSection>
)

export default Speakers
