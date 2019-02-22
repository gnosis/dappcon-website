import React from 'react'
import styled from 'styled-components'
import PreviewCompatibleImage from 'components/PreviewCompatibleImage'
import { colors } from 'theme'

const Div = styled.div`
  transition: color 0.3s ease-in-out;

  &:hover {
    color: ${colors.reddishPink};
  }
`

const SpeakerName = styled.span`
  display: block;
  font-size: 19px;
  font-weight: 800;
  margin-top: 16px;
  line-height: normal;
  letter-spacing: normal;

  color: ${props => props.red && colors.reddishPink};
`

const Info = styled.span`
  display: block;
  font-size: 14px;
  line-height: normal;
  margin-top: 12px;
  white-space: nowrap;
`

const Speaker = ({ speaker: { name, image, position, company }, showInfo }) => (
  <Div>
    <PreviewCompatibleImage image={image} style={{ width: 134, height: 134 }} />
    <SpeakerName>
      {name.substr(0, name.indexOf(' '))}
      <br />
      {name.substr(name.indexOf(' ') + 1)}
    </SpeakerName>
    <Info>
      {position}
      <br />
      {company}
    </Info>
  </Div>
)

export default Speaker
