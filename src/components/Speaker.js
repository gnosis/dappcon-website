import React from "react"
import styled from "styled-components"
import Markdown from "react-markdown"
import PreviewCompatibleImage from "components/PreviewCompatibleImage"
import { colors } from "theme"

const Div = styled.div`
  max-width: 135px;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: ${p => p.disabled ? '' : colors.reddishPink};
  }

  @media screen and (max-width: 767px) {
    max-width: 65px;
  }
`

const ImageContainer = styled.div`
  position: relative;
  width: 100px;
  height: 100px;

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

  @media screen and (max-width: 767px) {
    margin-top: 8px;
    font-size: 12px;
  }
`

const SpeakerPhoto = styled(PreviewCompatibleImage)`
  max-width: 134px;
  max-height: 134px;
  z-index: 1;
  border-radius: 8px;
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

const Speaker = ({
  speaker: { name, image, position, company },
  showInfo,
  disabled = false,
  hideDetails = false
}) => (
  <Div disabled={disabled}>
    <ImageContainer>
      <SpeakerPhoto image={image} />
    </ImageContainer>
    <SpeakerName>
      {name.substr(0, name.lastIndexOf(" "))}
      <br />
      {name.substr(name.lastIndexOf(" "))}
    </SpeakerName>
    {!hideDetails && (
      <Info>
        <Markdown source={position} />
        <Markdown source={company} />
      </Info>
    )}
  </Div>
)

export default Speaker
