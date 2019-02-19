import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import ContentWrapper from 'components/ContentWrapper'

const Wrapper = styled.section`
  padding-bottom: 175px;
`

const SponsorContainer = styled.div`
  display: grid;
  justify-content: space-between;
  grid-template-columns: 61px 61px 61px 61px;
  grid-template-rows: 65px 65px;
  grid-row-gap: 94px;
`

const Sponsor = styled.div`
`

const Placeholder = styled.div`
  width: 61px;
  height: 65px;
  background-color: rgba(109, 109, 109, 0.5);
`

const SponsorsSection = () => (
  <Wrapper>
    <ContentWrapper>
      <SponsorContainer>
        {Array(8)
          .fill(8)
          .map((_, i) => (
            <Sponsor key={i}>
              <Placeholder />
            </Sponsor>
          ))}
      </SponsorContainer>
    </ContentWrapper>
  </Wrapper>
)

export default SponsorsSection
