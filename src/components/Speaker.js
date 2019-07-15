import React from 'react'
import styled from 'styled-components'
import Markdown from 'react-markdown'
import PreviewCompatibleImage from 'components/PreviewCompatibleImage'
import { colors } from 'theme'

const Div = styled.div`
  max-width: 135px;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: ${colors.reddishPink};
  }

  @media screen and (max-width: 767px) {
    max-width: 65px;
  }
`

const ImageContainer = styled.div`
  position: relative;
  width: 134px;
  height: 134px;

  @media screen and (max-width: 767px) {
    width: 64px;
    height: 64px;
  }
`

const SpeakerName = styled.span`
  display: block;
  font-size: 19px;
  font-weight: 800;
  margin-top: 12px;
  line-height: normal;
  letter-spacing: normal;
  white-space: nowrap;

  color: ${props => props.red && colors.reddishPink};

  @media screen and (max-width: 767px) {
    margin-top: 8px;
    font-size: 12px;
  }
`

const GlassesImage = styled(PreviewCompatibleImage)`
  width: 134px;
  height: 134px;

  @media screen and (max-width: 767px) {
    width: 64px;
    height: 64px;
  }
`

const SpeakerPhoto = styled(PreviewCompatibleImage)`
  max-width: 134px;
  max-height: 134px;
  z-index: 1;
`

const GlassesImgContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  z-index: 2;
  transition: opacity .3s ease-in-out;

  ${Div}:hover & {
    opacity: 1;
  }
`

const Info = styled.span`
  display: block;
  font-size: 14px;
  line-height: normal;
  margin-top: 12px;
  white-space: nowrap;

  @media screen and (max-width: 767px) {
    margin-top: 4px;
    font-size: 10px;
  }
`

const Speaker = ({ speaker: { name, image, position, company, glassesImg }, showInfo }) => (
  <Div>
    <ImageContainer>
      <SpeakerPhoto image={image} />
      <GlassesImgContainer>
        <GlassesImage image={glassesImg} />
      </GlassesImgContainer>
    </ImageContainer>
    <SpeakerName>
      {name.substr(0, name.indexOf(' '))}
      <br />
      {name.substr(name.indexOf(' ') + 1)}
    </SpeakerName>
    <Info>
      <Markdown source={position} />
      <Markdown source={company} />
    </Info>
  </Div>
)

export default Speaker
