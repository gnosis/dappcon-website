import React from 'react'
import Markdown from 'react-markdown'
import styled from 'styled-components'
import ButtonLink from 'components/ButtonLink'
import { colors } from 'theme'

const ApplyBtn = styled(ButtonLink)`
  max-width: 85px;
  transition: border-color 0.3s ease-in-out, color 0.3s ease-in-out;
`

const StyledLink = styled.a`
  color: ${colors.white};
  text-decoration: underline;
  transition: color 0.3s ease-in-out;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: ${colors.white};
  flex-basis: 25%;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: ${colors.black};

    ${ApplyBtn} {
      color: ${colors.black};
      border-color: ${colors.black};
    }

    ${StyledLink} {
      color: ${colors.black};
    }
  }
`

const Heading = styled.h3`
  font-size: 49px;
  font-weight: 800;
`

const DescParagraph = styled(Markdown)`
  font-size: 19px;
  margin-top: 30px;
  min-height: 114px;
`

const markdownRenderers = {
  link: props => (
    <StyledLink href={props.href} target="_blank" rel="noopener noreferrer">
      {props.children}
    </StyledLink>
  ),
}

const ApplyCol = ({ heading, desc, link }) => (
  <Container>
    <Heading>{heading}</Heading>
    <DescParagraph source={desc} renderers={markdownRenderers}></DescParagraph>
    <ApplyBtn text="APPLY" href={link} target="_blank" />
  </Container>
)

export default ApplyCol
