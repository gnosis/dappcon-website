import React from 'react'
import styled from 'styled-components'
import { colors } from 'theme'

const ButtonLinkStyled = styled.a`
  background: ${colors.reddishPink};
  border-radius: 8px;
  border: none;
  font-size: 16px;
  font-weight: 800;
  height: 44px;
  box-sizing: border-box;
  color: ${colors.white};
  padding: 12px 18px;
  width: 136px;
  line-height: normal;
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
  children,
  href = '',
  onClick = () => ({}),
  hover = colors.veryLightPink,
  rel = 'noopener noreferrer',
  target = '',
  ...props
}) => (
  <ButtonLinkStyled target={target} href={href} hover={hover} rel={rel} {...props}>
    {children}
  </ButtonLinkStyled>
)

export default ButtonLink
