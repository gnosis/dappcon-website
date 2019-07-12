import React from 'react'
import Markdown from 'react-markdown'
import styled from 'styled-components'
import { colors } from 'theme'

const StyledLink = styled.a`
  color: ${colors.reddishPink};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

const StyledH1 = styled.h1`
  margin: 10px 0;
  font-weight: bold;
  font-size: 24px;

  @media screen and (max-width: 767px) {
    font-size: 16px;
  }
`

const StyledH2 = styled.h1`
  font-size: 18px;
  margin: 5px 0;

  @media screen and (max-width: 767px) {
    font-size: 12px;
  }
`

const StyledLi = styled.li`
  list-style-type: disc;
`

const markdownRenderers = {
  link: props => (
    <StyledLink href={props.href} target="_blank" rel="noopener noreferrer">
      {props.children}
    </StyledLink>
  ),
  heading: props => {
    if (props.level === 1) {
      return <StyledH1>{props.children}</StyledH1>
    } else if (props.level === 2) {
      return <StyledH2>{props.children}</StyledH2>
    } else {
      const { Heading } = Markdown.renderers

      return <Heading {...props}></Heading>
    }

    return
  },
  listItem: props => <StyledLi>{props.children}</StyledLi>,
}

export default markdownRenderers
