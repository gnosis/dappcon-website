import React from 'react'
import styled from 'styled-components'
import { colors } from 'theme'

const StyledButton = styled.button`
  background: transparent;
  border-radius: 8px;
  border: 2px solid ${colors.white};
  font-size: 20px;
  font-weight: 800;
  color: ${colors.white};
  padding: 18px;
`

const Button = ({ type = 'button', text, onClick = () => ({}) }) => (
  <StyledButton type={type} onClick={onClick}>
    {text}
  </StyledButton>
)

export default Button
