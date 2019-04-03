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
  margin-top: 16px;
  line-height: normal;
  letter-spacing: normal;
  white-space: nowrap;

  color: ${props => props.red && colors.reddishPink};

  @media screen and (max-width: 767px) {
    margin-top: 4px;
    font-size: 12px;
  }
`

const Info = styled.span`
  display: block;
  font-size: 14px;
  line-height: normal;
  margin-top: 12px;
  white-space: nowrap;

  @media screen and (max-width: 767px) {
    font-size: 10px;
  }
`

const Speaker = ({ speaker: { name, image, position, company }, showInfo }) => (
  <Div>
    <ImageContainer>
      <PreviewCompatibleImage image={image} style={{ maxWidth: 134, maxHeight: 134 }} />
    </ImageContainer>
    <SpeakerName>
      {name.substr(0, name.indexOf(' '))}
      <br />
      {name.substr(name.indexOf(' ') + 1)}
    </SpeakerName>
    <Info>
      {position}
      <br />
      <Markdown source={company} />
    </Info>
  </Div>
)

export default Speaker
