import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import ContentWrapper from 'components/ContentWrapper'

const Wrapper = styled.section`
  padding-top: 174px;
`

const SpeakersContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const SpeakerName = styled.span`
  display: block;
  font-size: 19px;
  font-weight: 800;
  margin-top: 16px;
  line-height: normal;
  letter-spacing: normal;
`

const SpeakersSection = ({ speakerPhoto }) => (
  <Wrapper>
    <ContentWrapper>
      <SpeakersContainer>
        {Array(4)
          .fill(4)
          .map((_, i) => (
            <div key={i} >
              <Img fixed={speakerPhoto} />
              <SpeakerName>
                Bernard
                <br />
                Lamanche
              </SpeakerName>
            </div>
          ))}
      </SpeakersContainer>
    </ContentWrapper>
  </Wrapper>
)

export default SpeakersSection
