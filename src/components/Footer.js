import React from 'react'
import styled, { css } from 'styled-components'
import { colors } from 'theme'
import DappConLogoFull from 'img/dappcon-logo-full.svg'
import { Link } from 'gatsby'

const StyledFooter = styled.footer`
  background-color: ${colors.veryLightPink};
  padding: 29px 15px 40px 30px;
`

const StyledLogo = styled.img`
  display: block;
  margin-bottom: 35px;

  @media screen and (max-width: 767px) {
    width: 50%;
    margin-bottom: 29px;
  }
`

const LinksCSS = css`
  color: ${props => (props.red ? colors.reddishPink : colors.secondaryBlack)};
  text-decoration: ${props => (props.underline ? 'underline' : 'none')};
`

const StyledLink = styled(Link)`
  ${LinksCSS}
`

const StyledExternalLink = styled.a`
  ${LinksCSS}
`

const ColumnsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const FooterColumn = styled.div`
  flex-basis: 40%;
  line-height: normal;
  color: ${colors.secondaryBlack};
  font-size: 14px;

  @media screen and (max-width: 767px) {
    font-size: 12px;
    display: flex;
    flex-direction: column;
    line-height: 2;
    flex-basis: 35%;
  }
`

const ApplyColumn = styled(FooterColumn)`
  flex-basis: 60%;
  display: flex;

  @media screen and (max-width: 767px) {
    flex-basis: 52%;
    line-height: 1;
  }
`

const Splitter = styled.span`
  @media screen and (max-width: 767px) {
    display: none;
  }
`

const SpeakerText = styled.div`
  display: inline-block;
`

const SponsorText = styled.div`
  display: inline-block;
  margin-left: auto;
  max-width: 263px;

  @media screen and (max-width: 767px) {
    margin-top: 50px;
  }
`

const HideOnMobile = styled.span`
  @media screen and (max-width: 767px) {
    display: none;
  }
`

const CapitalizeOnMobile = styled.span`
  @media screen and (max-width: 767px) {
    text-transform: capitalize;
  }
`

const MobileSplitter = styled.div`
  display: none;

  @media screen and (max-width: 767px) {
    display: inherit;
  }
`

const Footer = () => (
  <StyledFooter>
    <StyledLogo src={DappConLogoFull} alt="Dappcon logo" />
    <ColumnsContainer>
      <FooterColumn>
        <StyledExternalLink href="mailto:info@dappcon.io" target="_blank" rel="noopener noreferrer" underline>
          info@dappcon.io
        </StyledExternalLink>
        <Splitter> | </Splitter>
        <StyledExternalLink
          href="https://twitter.com/dappcon_berlin"
          target="_blank"
          rel="noopener noreferrer"
          underline
        >
          Twitter
        </StyledExternalLink>
        <br />
        <br />
        <span>{new Date().getFullYear()} DAPPCON.</span> Imprint.{' '}
        <StyledLink to="/privacy-policy" underline>
          Privacy Policy.
        </StyledLink>
      </FooterColumn>
      <ApplyColumn>
        <SpeakerText>
          Do you want to become a speaker?
          <br />
          <MobileSplitter>
            <br />
          </MobileSplitter>
          <StyledExternalLink
            href="https://gnosis1.typeform.com/to/ZNV6Wf"
            target="_blank"
            rel="noopener noreferrer"
            red
          >
            Apply
          </StyledExternalLink>
        </SpeakerText>
        <SponsorText>
          Do you want to become a sponsor?{' '}
          <MobileSplitter>
            <br />
          </MobileSplitter>
          Find more info here{' '}
          <MobileSplitter>
            <br />
          </MobileSplitter>
          <HideOnMobile>and </HideOnMobile>
          <CapitalizeOnMobile>apply here</CapitalizeOnMobile>
        </SponsorText>
      </ApplyColumn>
    </ColumnsContainer>
  </StyledFooter>
)

export default Footer
