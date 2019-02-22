import React from 'react'
import styled, { css } from 'styled-components'
import { colors } from 'theme'
import DappConLogoFull from 'img/dappcon-logo-full.svg'
import { Link } from 'gatsby'

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

const LinksCSS = css`
  color: ${colors.reddishPink};
  text-decoration: none;
`

const StyledLink = styled(Link)`
  ${LinksCSS}
`

const StyledExternalLink = styled.a`
  ${LinksCSS}
`

const Footer = () => (
  <StyledFooter>
    <StyledLogo src={DappConLogoFull} alt="Dappcon logo" />
    <ColumnsContainer>
      <FooterColumn extended>
        <StyledExternalLink href="mailto:info@dappcon.io" target="_blank" rel="noopener noreferrer">
          info@dappcon.io
        </StyledExternalLink>{' '}
        |{' '}
        <StyledExternalLink
          href="https://twitter.com/dappcon_berlin"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </StyledExternalLink>
        <br />
        <br />
        <span>{new Date().getFullYear()} DAPPCON.</span> Imprint.{' '}
        <StyledLink to="/privacy-policy">Privacy Policy.</StyledLink>
      </FooterColumn>
      <FooterColumn>
        Do you want to become a speaker?
        <br />
        <StyledExternalLink
          href="https://gnosis1.typeform.com/to/ZNV6Wf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Apply
        </StyledExternalLink>
      </FooterColumn>
      <FooterColumn>
        Do you want to become a sponsor? Find more info here and apply here
      </FooterColumn>
    </ColumnsContainer>
  </StyledFooter>
)

export default Footer
