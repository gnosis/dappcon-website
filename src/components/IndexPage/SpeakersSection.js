import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import ContentWrapper from 'components/ContentWrapper'
import { colors } from 'theme'
import { Link } from 'gatsby';

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

  color: ${props => props.red && colors.reddishPink};
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
          <div key={i}>
            <Img fixed={speakerPhoto} />
            <SpeakerName red={i === Speakers.length - 1}>
              Bernard
              <br />
              Lamanche
            </SpeakerName>
          </div>
        ))}
      </SpeakersContainer>
      <StyledLink to="speakers">See all confirmed speakers...</StyledLink>
    </ContentWrapper>
  </Wrapper>
)

export default SpeakersSection
