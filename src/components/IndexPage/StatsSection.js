import React, { useState } from "react"
import CountUp from "react-countup"
import styled from "styled-components"
import Markdown from "react-markdown"
import { colors } from "theme"
import MdRenderers from "markdownRenderers"
import ContentWrapper from "components/ContentWrapper"
import VisibilitySensor from "react-visibility-sensor"

const Wrapper = styled.section`
  background: ${colors.bgWhite};
`

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  
  &:not(:first-child) {
    margin-top: 45px;
  }
`

const Heading = styled.h2`
  font-size: 36px;
  font-weight: 800;
  flex-basis: 50%;

  @media screen and (max-width: 767px) {
    font-size: 20px;
  }
`

const Paragraph = styled(Markdown)`
  text-align: left;
  font-size: 16px;
  line-height: normal;
  display: block;
  color: ${colors.secondaryBlack};
  flex-basis: 50%;

  @media screen and (max-width: 767px) {
    font-size: 12px;
  }
`

const Stat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: ${colors.black};
  width: 217px;

  &:first-child {
    margin-top: 0;
  }

  @media screen and (max-width: 767px) {
    width: 84px;
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
    font-size: 8.6px;
  }
`

const StatsSection = ({
  stats: { firstStat, secondStat, thirdStat },
  statsHeading,
  statsSentence1,
  statsSentence2
}) => {
  const [statsVisible, setStatsVisibility] = useState(false)

  return (
    <Wrapper id="about">
      <ContentWrapper>
        <VisibilitySensor onChange={setStatsVisibility} active={!statsVisible}>
          <SectionContainer>
            <Row>
              <Heading>{statsHeading}</Heading>
              <Stat>
                <StatNumber>
                  <CountUp
                    start={0}
                    end={statsVisible ? +firstStat.number : 0}
                    suffix="+"
                  />
                </StatNumber>
                <StatTitle>{firstStat.description}</StatTitle>
              </Stat>
            </Row>
            <Row>
              <Paragraph
                source={statsSentence1}
                escapeHtml={false}
                renderers={MdRenderers}
              />
              <Stat>
                <StatNumber>
                  <CountUp
                    start={0}
                    end={statsVisible ? +secondStat.number : 0}
                    suffix="+"
                  />
                </StatNumber>
                <StatTitle>{secondStat.description}</StatTitle>
              </Stat>
            </Row>
            <Row>
              <Paragraph
                source={statsSentence2}
                escapeHtml={false}
                renderers={MdRenderers}
              />
              <Stat>
                <StatNumber>
                  <CountUp
                    start={0}
                    end={statsVisible ? +thirdStat.number : 0}
                    suffix="+"
                  />
                </StatNumber>
                <StatTitle>{thirdStat.description}</StatTitle>
              </Stat>
            </Row>
          </SectionContainer>
        </VisibilitySensor>
      </ContentWrapper>
    </Wrapper>
  )
}

export default StatsSection
