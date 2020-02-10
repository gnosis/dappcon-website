import React from 'react'
import styled from 'styled-components'
import ContentWrapper from 'components/ContentWrapper'
import { colors } from 'theme'
import ApplyCol from './ApplyCol'

const Wrapper = styled.div`
  background-color: ${colors.reddishPink};
  padding-bottom: 33vh;
`

const StyledContentWrapper = styled(ContentWrapper)`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 767px) {
    flex-direction: column;

    & > * {
      margin-bottom: 60px;
    }

    & > *:last-child {
      margin-bottom: 0;
    }
  }
`

const ApplySection = ({ columns }) => (
  <Wrapper>
    <StyledContentWrapper>
      {columns.map(col => (
        <ApplyCol key={col.title} heading={col.title} desc={col.description} link={col.url} />
      ))}
    </StyledContentWrapper>
  </Wrapper>
)

export default ApplySection
