import React, { useState } from 'react'
import CountUp from 'react-countup'
import styled from 'styled-components'
import { colors } from 'theme'
import ContentWrapper from 'components/ContentWrapper'
import VisibilitySensor from 'react-visibility-sensor'

const Wrapper = styled.section`
  padding: 175px 0;
  background: ${colors.bgWhite};

  @media screen and (max-width: 767px) {
    padding: 70px 0;
  }
`

const Paragraph = styled.p`
  max-width: 688px;
  text-align: center;
  font-size: 19px;
  line-height: normal;
  display: block;
  margin: 0 auto;
  color: ${colors.secondaryBlack};

  @media screen and (max-width: 767px) {
    font-size: 12px;
  }
`

const StatsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 174px;

  @media screen and (max-width: 767px) {
    margin-top: 80px;
  }
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

  @media screen and (max-width: 767px) {
    font-size: 37px;
  }
`

const StatTitle = styled.span`
  font-weight: 800;

  @media screen and (max-width: 767px) {
    font-size: 12px;
  }
`

const StatsSection = ({ stats: { firstStat, secondStat, thirdStat } }) => {
  const [statsVisible, setStatsVisibility] = useState(false)

  return (
    <Wrapper id="about">
      <ContentWrapper>
        <Paragraph>
          After having successfully brought together more than 600 Ethereum developers, researchers and enthusiasts in
          summer 2018, DappCon will take place for a second time this summer! DappCon is a nonprofit global developer
          conference focusing on decentralized applications, tooling, and foundational infrastructure on Ethereum.
        </Paragraph>
        <VisibilitySensor onChange={isVisible => setStatsVisibility(isVisible)} active={!statsVisible}>
          <StatsContainer>
            <Stat>
              <StatNumber>
                <CountUp start="0" end={statsVisible ? +firstStat.number : 0} />
              </StatNumber>
              <StatTitle>{firstStat.description}</StatTitle>
            </Stat>
            <Stat>
              <StatNumber>
                <CountUp start="0" end={statsVisible ? +secondStat.number : 0} suffix="+" />
              </StatNumber>
              <StatTitle>{secondStat.description}</StatTitle>
            </Stat>
            <Stat>
              <StatNumber>
                <CountUp start="0" end={statsVisible ? +thirdStat.number : 0} suffix="+" />
              </StatNumber>
              <StatTitle>{thirdStat.description}</StatTitle>
            </Stat>
          </StatsContainer>
        </VisibilitySensor>
      </ContentWrapper>
    </Wrapper>
  )
}

export default StatsSection
