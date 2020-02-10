import React from "react"
import Markdown from "react-markdown"
import styled from "styled-components"
import { DownloadIcon } from "components/Svg"
import ButtonLink from "components/ButtonLink"
import { colors } from "theme"

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
  max-width: 260px;
  padding: 14px;
  min-height: 330px;
  transition: color 0.3s ease-in-out, border-color 0.3s ease-in-out;
  border: 2px solid #efefef;
  border-radius: 8px;
  box-sizing: border-box;

  g {
    transition: fill 0.3s ease-in-out;
  }

  &:hover {
    color: ${colors.black};
    border-color: ${colors.black};

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
  font-size: 36px;
  font-weight: 800;
  min-height: 108px;

  @media screen and (max-width: 767px) {
    font-size: 30px;
  }
`

const DescParagraph = styled(Markdown)`
  font-size: 16px;
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
  )
}

const BuyButton = ({ heading, desc, link, cta }) => (
  <Container>
    <Heading>{heading}</Heading>
    <DescParagraph source={desc} renderers={markdownRenderers}></DescParagraph>
    {cta}
  </Container>
)

export default BuyButton
