import React, { useState } from 'react'
import CountUp from 'react-countup'
import styled from 'styled-components'
import Markdown from 'react-markdown'
import { colors } from 'theme'
import MdRenderers from 'markdownRenderers'
import ContentWrapper from 'components/ContentWrapper'
import VisibilitySensor from 'react-visibility-sensor'

const Wrapper = styled.section`
  padding: 175px 0;
  background: ${colors.bgWhite};

  @media screen and (max-width: 767px) {
    padding: 70px 0;
  }
`

const DesktopTextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 767px) {
    display: none;
  }
`

const Paragraph = styled(Markdown)`
  text-align: left;
  font-size: 19px;
  line-height: normal;
  display: block;
  margin: 0 auto;
  color: ${colors.secondaryBlack};
  flex-basis: 48%;

  @media screen and (max-width: 767px) {
    font-size: 12px;
  }
`

const EnlargedParagraph = styled(Paragraph)`
  font-size: 29px;
  letter-spacing: -0.4px;
  line-height: 1.4;
`

const MobileParagraph = styled(Paragraph)`
  max-width: 688px;
  text-align: center;
  font-size: 12px;

  @media screen and (min-width: 767px) {
    display: none;
  }
`

const StatsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-direction: column;
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
  min-width: 120px;

  @media screen and (max-width: 767px) {
    min-width: 63px;
  }
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

const StatsSection = ({
  stats: { firstStat, secondStat, thirdStat },
  aboutDappconLeftCol,
  aboutDappconRightCol,
}) => {
  const [statsVisible, setStatsVisibility] = useState(false)
  const mobileText = `${aboutDappconLeftCol} ${aboutDappconRightCol}`

  return (
    <Wrapper id="about">
      <ContentWrapper>
        <DesktopTextContainer>
          <EnlargedParagraph source={aboutDappconLeftCol} renderers={MdRenderers} />
          <Paragraph source={aboutDappconRightCol} escapeHtml={false} renderers={MdRenderers} />
        </DesktopTextContainer>
        <MobileParagraph source={mobileText} escapeHtml={false} renderers={MdRenderers} />
        <VisibilitySensor onChange={setStatsVisibility} active={!statsVisible}>
          <StatsContainer>
            <Stat>
              <StatNumber>
                <CountUp start={0} end={statsVisible ? +firstStat.number : 0} suffix="+" />
              </StatNumber>
              <StatTitle>{firstStat.description}</StatTitle>
            </Stat>
            <Stat>
              <StatNumber>
                <CountUp start={0} end={statsVisible ? +secondStat.number : 0} suffix="+" />
              </StatNumber>
              <StatTitle>{secondStat.description}</StatTitle>
            </Stat>
            <Stat>
              <StatNumber>
                <CountUp start={0} end={statsVisible ? +thirdStat.number : 0} suffix="+" />
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
