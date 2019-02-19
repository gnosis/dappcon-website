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

const Speaker = ({ speakerPhoto, red = false }) => (
  <div>
    <Img fixed={speakerPhoto} />
    <SpeakerName red={red}>
      Bernard
      <br />
      Lamanche
    </SpeakerName>
  </div>
)

export default Speaker
