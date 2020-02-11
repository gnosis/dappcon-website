import React from 'react'
import styled from 'styled-components'
import Markdown from 'react-markdown'
import { colors } from 'theme'
import ButtonLink from 'components/ButtonLink'
import ContentWrapper from 'components/ContentWrapper'
import DappConLogo from 'img/1-st-section.svg'

const Wrapper = styled.section`
  height: 100vh;
  background: ${colors.bgWhite};
  display: flex;
  align-items: center;
  justify-content: center;
`

const MainSection = ({ mainTitle, buttonText, buyTicketsLink, locationAndDate }) => (
  <Wrapper id="main">
    <img src={DappConLogo} alt="Dappcon Logo" />
  </Wrapper>
)

export default MainSection
