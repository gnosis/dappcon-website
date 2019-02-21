import React from 'react'
import styled from 'styled-components'
import { colors } from 'theme'
import ContentWrapper from 'components/ContentWrapper'

const Wrapper = styled.section`
  padding: 175px 0;
`

const Paragraph = styled.p`
  max-width: 688px;
  text-align: center;
  font-size: 19px;
  line-height: normal;
  display: block;
  margin: 0 auto;
  color: ${colors.secondaryBlack};
`

const StatsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 174px;
`

const Stat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${colors.black};
`

const StatNumber = styled.span`
  font-size: 69px;
  font-weight: 800;
`

const StatTitle = styled.span`
  font-weight: 800;
`

const StatsSection = ({ stats: { firstStat, secondStat, thirdStat } }) => (
  <Wrapper id="#about">
    <ContentWrapper>
      <Paragraph>
        After having successfully brought together more than 600 Ethereum developers, researchers
        and enthusiasts in summer 2018, DappCon will take place for a second time this summer!
        DappCon is a nonprofit global developer conference focusing on decentralized applications,
        tooling, and foundational infrastructure on Ethereum.
      </Paragraph>
      <StatsContainer>
        <Stat>
          <StatNumber>{firstStat.number}</StatNumber>
          <StatTitle>{firstStat.description}</StatTitle>
        </Stat>
        <Stat>
          <StatNumber>{secondStat.number}</StatNumber>
          <StatTitle>{secondStat.description}</StatTitle>
        </Stat>
        <Stat>
          <StatNumber>{thirdStat.number}</StatNumber>
          <StatTitle>{thirdStat.description}</StatTitle>
        </Stat>
      </StatsContainer>
    </ContentWrapper>
  </Wrapper>
)

export default StatsSection
