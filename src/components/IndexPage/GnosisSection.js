import React from 'react'
import styled from 'styled-components'
import ContentWrapper from 'components/ContentWrapper'

const Wrapper = styled.section`
  padding: 174px 0;
`

const StyledContentWrapper = styled(ContentWrapper)`
  text-align: center;
`

const Text = styled.p`
  max-width: 689px;
  text-align: center;
  display: inline-block;
`

const GnosisSection = ({ text }) => (
  <Wrapper id="gnosis">
    <StyledContentWrapper>
      <Text>{text}</Text>
    </StyledContentWrapper>
  </Wrapper>
)

export default GnosisSection
