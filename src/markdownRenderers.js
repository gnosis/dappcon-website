import React from 'react'
import styled from 'styled-components'
import { colors } from 'theme'

const StyledLink = styled.a`
  color: ${colors.reddishPink};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

const markdownRenderers = {
  link: props => (
    <StyledLink href={props.href} target="_blank" rel="noopener noreferrer">
      {props.children}
    </StyledLink>
  ),
}

export default markdownRenderers