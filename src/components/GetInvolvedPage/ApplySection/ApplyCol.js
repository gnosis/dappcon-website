import React from 'react'
import Markdown from 'react-markdown'
import styled from 'styled-components'
import { DownloadIcon } from 'components/Svg'
import ButtonLink from 'components/ButtonLink'
import { colors } from 'theme'

const ApplyBtn = styled(ButtonLink)`
  max-width: 85px;
  transition: border-color 0.3s ease-in-out, color 0.3s ease-in-out;
  margin-right: 14px;
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

  g {
    transition: fill 0.3s ease-in-out;
  }

  &:hover {
    color: ${colors.black};

    ${ApplyBtn} {
      color: ${colors.black};
      border-color: ${colors.black};
    }

    ${StyledLink} {
      color: ${colors.black};
    }

    g {
      fill: ${colors.black} !important;
    }
  }
`

const Heading = styled.h3`
  font-size: 49px;
  font-weight: 800;

  @media screen and (max-width: 767px) {
    font-size: 30px;
  }
`

const DescParagraph = styled(Markdown)`
  font-size: 19px;
  margin-top: 30px;
  min-height: 114px;

  @media screen and (max-width: 767px) {
    font-size: 12px;
    min-height: 57px;
  }
`

const ButtonContainer = styled.div`
  display: flex;
  max-height: 43px;
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
    <ButtonContainer>
      {heading !== 'Speaker' && <ApplyBtn text="APPLY" href={link} target="_blank" />}
      {heading === 'Sponsor' && (
        <a
          href="https://drive.google.com/file/d/1BsT4NA_tq8u4o-K3I209TDgQnUjpdYHX/view"
          target="_blank"
          rel="noopener noreferrer"
        >
          <DownloadIcon />
        </a>
      )}
    </ButtonContainer>
  </Container>
)

export default ApplyCol
