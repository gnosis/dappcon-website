import React from "react"
import styled from "styled-components"
import Markdown from "react-markdown"
import Slider from "react-slick"
import ContentWrapper from "components/ContentWrapper"
import PreviewCompatibleImage from "components/PreviewCompatibleImage"
import { colors } from "theme"
import mdRenderers from "markdownRenderers"
import LeftArrow from "assets/arrow-left.svg"
import RightArrow from "assets/arrow-right.svg"

const Wrapper = styled.section`
  padding-top: 168px;
  background: ${colors.bgWhite};

  @media screen and (max-width: 767px) {
    padding-top: 62px;
  }

  .slick-slide > div {
    display: flex;
    justify-content: center;
  }

  .slick-arrow {
    width: 65px;

    @media screen and (max-width: 767px) {
      width: 31px;
    }
  }

  @media screen and (max-width: 767px) {
    .slick-prev {
      left: -20px;
    }

    .slick-next {
      right: -20px;
    }
  }
`

const DappContainer = styled.a`
  max-width: 100px;
  height: 100px;
  width: 100px;

  @media screen and (max-width: 767px) {
    max-width: 46px;
    height: 46px;
    width: 46px;
  }
`

const Dapp = styled(PreviewCompatibleImage)`
  border-radius: 5px;
`

const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 55px;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`

const LCText = styled(Markdown)`
  font-size: 36px;
  font-weight: 800;
  flex-basis: 50%;

  @media screen and (max-width: 767px) {
    font-size: 20px;
  }
`

const RCText = styled(Markdown)`
  font-size: 16px;
  font-weight: 800;
  flex-basis: 27%;

  @media screen and (max-width: 767px) {
    margin-top: 25px;
    font-weight: 400;
  }
`

const Arrow = ({ className, style, onClick, isRightArrow }) => (
  <img
    src={isRightArrow ? RightArrow : LeftArrow}
    className={className}
    style={style}
    onClick={onClick}
    alt="Arrow"
    onKeyDown={onClick}
  />
)

const SLIDER_SETTINGS = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: <Arrow isRightArrow />,
  prevArrow: <Arrow />
}

const DappsSection = ({ dappsTextRC, dappsTextLC, dapps }) => {

  return (
    <Wrapper id="dapps">
      <ContentWrapper>
        <Slider {...SLIDER_SETTINGS}>
          {dapps.map(dapp => (
            <DappContainer href={dapp.url} title={dapp.name}>
              <Dapp key={dapp.name} image={dapp.logo} alt={dapp.name} />
            </DappContainer>
          ))}
        </Slider>
        <TextContainer>
          <LCText renderers={mdRenderers}>{dappsTextLC}</LCText>
          <RCText renderers={mdRenderers}>{dappsTextRC}</RCText>
        </TextContainer>
      </ContentWrapper>
    </Wrapper>
  )
}

export default DappsSection
