import React from "react"
import styled from "styled-components"
import Slider from "react-slick"
import ContentWrapper from "components/ContentWrapper"
import { colors } from "theme"
import LeftArrow from "assets/arrow-left.svg"
import RightArrow from "assets/arrow-right.svg"

const Wrapper = styled.section`
  padding-top: 168px;
  background: ${colors.bgWhite};

  @media screen and (max-width: 767px) {
    padding-top: 62px;
  }

  .slick-slide > div {
    text-align: center;
  }

  .slick-arrow {
    width: 65px;
  }
`

const Dapp = styled.div`
  max-width: 100px;
  height: 100px;
  background-color: red;
  border-radius: 5px;
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

const DappsSection = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <Slider {...SLIDER_SETTINGS}>
          <Dapp />
          <Dapp />
          <Dapp />
          <Dapp />
          <Dapp />
        </Slider>
      </ContentWrapper>
    </Wrapper>
  )
}

export default DappsSection
