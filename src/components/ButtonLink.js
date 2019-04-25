import React from 'react'
import styled from 'styled-components'
import { colors } from 'theme'

const ButtonLinkStyled = styled.a`
  background: transparent;
  border-radius: 8px;
  border: 2px solid ${colors.white};
  font-size: 20px;
  font-weight: 800;
  color: ${colors.white};
  padding: 10px 18px;
  transition: color 0.2s, border-color 0.2s;
  cursor: pointer;
  text-decoration: none;
  text-align: center;

  &:hover {
    color: ${props => props.hover};
    border-color: ${props => props.hover};
  }

  &:focus {
    outline: 0;
    color: ${colors.black};
    border-color: ${colors.black};
  }
`

const ButtonLink = ({
  text,
  href = '',
  onClick = () => ({}),
  hover = colors.veryLightPink,
  rel = 'noopener noreferrer',
  target = '',
  ...props
}) => (
  <ButtonLinkStyled href={href} hover={hover} {...props}>
    {text}
  </ButtonLinkStyled>
)

export default ButtonLink
