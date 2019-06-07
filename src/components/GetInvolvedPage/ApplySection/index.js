import React from 'react'
import styled from 'styled-components'
import ContentWrapper from 'components/ContentWrapper'
import { colors } from 'theme'
import ApplyCol from './ApplyCol'

const cols = [
  { heading: 'Sponsor', desc: 'To give a talk or to organise a workshop, apply here.', link: '/' },
  { heading: 'Sponsor', desc: 'To give a talk or to organise a workshop, apply here.', link: '/' },
  { heading: 'Sponsor', desc: 'To give a talk or to organise a workshop, apply here.', link: '/' },
]

const Wrapper = styled.div`
  background-color: ${colors.reddishPink};
  padding-bottom: 33vh;
`

const StyledContentWrapper = styled(ContentWrapper)`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 767px) {
    flex-direction:column;

    & > * {
      margin-bottom: 60px;
    }

    & > *:last-child {
      margin-bottom: 0;
    }
  }
`

const ApplySection = () => (
  <Wrapper>
    <StyledContentWrapper>
      {cols.map(col => (
        <ApplyCol heading={col.heading} desc={col.desc} />
      ))}
    </StyledContentWrapper>
  </Wrapper>
)

export default ApplySection
