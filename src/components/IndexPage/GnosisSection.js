import React from 'react'
import styled from 'styled-components'
import ContentWrapper from 'components/ContentWrapper'
import { colors } from 'theme'

const Wrapper = styled.section`
  padding: 174px 0;
  background: ${colors.bgWhite};

  @media screen and (max-width: 767px) {
    padding: 60px 0;
  }
`

const StyledContentWrapper = styled(ContentWrapper)`
  text-align: center;
`

const StyledLink = styled.a`
  color: ${colors.reddishPink};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

const Text = styled.p`
  max-width: 689px;
  text-align: center;
  display: inline-block;
  line-height: normal;
  font-size: 19px;

  @media screen and (max-width: 767px) {
    font-size: 12px;
  }
`

const GnosisSection = ({ text = '' }) => {
  const firstPart = text.substr(0, text.indexOf('Gnosis'))
  const secondPart = text.substr(text.indexOf('Gnosis') + 6)
  const textWithLink = [
    firstPart,
    <StyledLink href="https://gnosis.io" target="_blank" rel="noopener noreferrer">
      Gnosis
    </StyledLink>,
    secondPart,
  ]

  return (
    <Wrapper id="gnosis">
      <StyledContentWrapper>
        <Text>{textWithLink}</Text>
      </StyledContentWrapper>
    </Wrapper>
  )
}

export default GnosisSection
