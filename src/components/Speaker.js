import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { colors } from 'theme'

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

const Speaker = ({ speaker: { name, image, position, company }, red = false, showInfo }) => (
  <div>
    <Img fixed={image.childImageSharp.fixed} />
    <SpeakerName red={red}>
      {name.substr(0, name.indexOf(' '))}
      <br />
      {name.substr(name.indexOf(' ') + 1)}
    </SpeakerName>
    {showInfo && (
      <Info>
        {position}
        <br />
        {company}
      </Info>
    )}
  </div>
)

export default Speaker
