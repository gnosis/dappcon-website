import React from 'react'
import styled from 'styled-components'
import ButtonLink from 'components/ButtonLink'
import { colors } from 'theme'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: ${colors.white};
  flex-basis: 25%;
`

const Heading = styled.h3`
  font-size: 49px;
  font-weight: 800;
`

const DescParagraph = styled.p`
  font-size: 19px;
  margin-top: 30px;
`

const ApplyBtn = styled(ButtonLink)`
  max-width: 85px;
  margin-top: 30px;
`

const ApplyCol = ({ heading, desc, link }) => (
  <Container>
    <Heading>{heading}</Heading>
    <DescParagraph>{desc}</DescParagraph>
    <ApplyBtn text="APPLY" href={link} />
  </Container>
)

export default ApplyCol
