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

const GnosisSection = () => (
  <Wrapper>
    <StyledContentWrapper>
      <Text>
        DappCon is organized by Gnosis, one of Ethereum’s early dApps. Gnosis launched in August
        2015, one week after Frontier went live, as the first major dapp on Ethereum. Today, Gnosis
        is building four major Ethereum-based dapps and works towards the development and continuous
        growth of Ethereum—both its infrastructure and ecosystem.
      </Text>
    </StyledContentWrapper>
  </Wrapper>
)

export default GnosisSection
