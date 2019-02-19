import React from 'react'
import styled from 'styled-components'
import { colors } from 'theme'
import DappConLogoFull from 'img/dappcon-logo-full.svg'
import ContentWrapper from 'components/ContentWrapper'

const StyledFooter = styled.footer`
  background-color: ${colors.veryLightPink};
  padding: 29px 56px 40px 30px;
`

const StyledLogo = styled.img`
  display: block;
  margin-bottom: 35px;
`

const ColumnsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const FooterColumn = styled.div`
  flex-basis: ${props => (props.extended ? '40%' : '30%')};
  line-height: normal;
  color: ${colors.secondaryBlack};
  font-size: 14px;
`

const Footer = () => (
  <StyledFooter>
    <StyledLogo src={DappConLogoFull} alt="Dappcon logo" />
    <ColumnsContainer>
      <FooterColumn extended>
        <a href="mailto:info@dappcon.io">info@dappcon.io</a> |{' '}
        <a href="https://twitter.com/dappcon_berlin" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
        <br />
        <br />
        <span>{new Date().getFullYear()} DAPPCON.</span> Imprint. Privacy Policy.
      </FooterColumn>
      <FooterColumn>
        Do you want to become a speaker?
        <br />
        Apply
      </FooterColumn>
      <FooterColumn>
        Do you want to become a sponsor? Find more info here and apply here
      </FooterColumn>
    </ColumnsContainer>
  </StyledFooter>
)

export default Footer
