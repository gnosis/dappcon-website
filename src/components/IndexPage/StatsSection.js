import React, { useState } from "react"
import CountUp from "react-countup"
import styled from "styled-components"
import Markdown from "react-markdown"
import { colors } from "theme"
import MdRenderers from "markdownRenderers"
import ContentWrapper from "components/ContentWrapper"
import VisibilitySensor from "react-visibility-sensor"

const Wrapper = styled.section`
  padding: 175px 0;
  background: ${colors.bgWhite};

  @media screen and (max-width: 767px) {
    padding: 70px 0;
  }
`

const SectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const Heading = styled.h2`
  font-size: 36px;
  font-weight: 800;

  @media screen and (max-width: 767px) {
    display: none;
  }
`

const MobileHeading = styled.h2`
  font-size: 20px;
  font-weight: 800;
  margin-bottom: 30px;
  max-width: 230px;

  @media screen and (min-width: 767px) {
    display: none;
  }
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-basis: 50%;
`

const Paragraph = styled(Markdown)`
  text-align: left;
  font-size: 16px;
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
  flex-direction: column;
  flex-basis: 33%;
`

const Stat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${colors.black};
  min-width: 120px;
  margin-top: 30px;

  &:first-child {
    margin-top: 0;
  }

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
  statsHeading,
  statsSentence1,
  statsSentence2
}) => {
  const [statsVisible, setStatsVisibility] = useState(false)

  return (
    <Wrapper id="about">
      <ContentWrapper>
        <MobileHeading>{statsHeading}</MobileHeading>
        <SectionContainer>
          <TextContainer>
            <Heading>{statsHeading}</Heading>
            <Paragraph
              source={statsSentence1}
              escapeHtml={false}
              renderers={MdRenderers}
            />
            <Paragraph
              source={statsSentence2}
              escapeHtml={false}
              renderers={MdRenderers}
            />
          </TextContainer>
          <VisibilitySensor
            onChange={setStatsVisibility}
            active={!statsVisible}
          >
            <StatsContainer>
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
            </StatsContainer>
          </VisibilitySensor>
        </SectionContainer>
      </ContentWrapper>
    </Wrapper>
  )
}

export default StatsSection
