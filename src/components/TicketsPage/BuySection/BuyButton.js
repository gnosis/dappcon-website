import React, { useState } from "react"
import Markdown from "react-markdown"
import Mintbase from "mintbase-bridge"
import styled from "styled-components"
import { colors } from "theme"

const SLinkContainer = styled.a`
  text-decoration: none;
`

const SBtnContainer = styled.div`
  cursor: ${(p) => (p.isMintbase ? "pointer" : "initial")};
`

const StyledLink = styled.a`
  color: ${colors.white};
  text-decoration: underline;
  transition: color 0.3s ease-in-out;
`

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  color: ${colors.white};
  max-width: 260px;
  padding: 14px;
  min-height: 330px;
  transition: color 0.3s ease-in-out, border-color 0.3s ease-in-out;
  border: 2px solid #efefef;
  border-radius: 8px;
  box-sizing: border-box;
  pointer-events: ${(p) => (p.isActive ? "all" : "none")};

  g {
    transition: fill 0.3s ease-in-out;
  }

  &:hover {
    color: ${colors.black};
    border-color: ${colors.black};
  }

  @media screen and (max-width: 767px) {
    min-width: 260px;
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

const CallToAction = styled.p`
  position: absolute;
  bottom: 10px;
  right: 10px;
  font-weight: 800;
`

const markdownRenderers = {
  link: (props) => (
    <StyledLink href={props.href} target="_blank" rel="noopener noreferrer">
      {props.children}
    </StyledLink>
  ),
}

const BuyButton = ({ heading, desc, link, cta, isMintbase, isActive }) => {
  const [isMintbaseModalOpen, setIsMintbaseModalOpen] = useState(false)

  const BtnContainerComponent =
    isActive && !isMintbase ? SLinkContainer : SBtnContainer

  return (
    <>
      <BtnContainerComponent
        href={link}
        onClick={
          isMintbase
            ? () => {
                setIsMintbaseModalOpen(true)
              }
            : () => {}
        }
        isMintbase={isMintbase}
      >
        <Container isActive={isActive}>
          <Heading>{heading}</Heading>
          <DescParagraph source={desc} renderers={markdownRenderers} />
          <CallToAction>{cta}</CallToAction>
        </Container>
      </BtnContainerComponent>
      {isMintbase && (
        <Mintbase
          contract="0x202d2f33449bf46d6d32ae7644ada130876461a4"
          show={isMintbaseModalOpen}
          handleClose={setIsMintbaseModalOpen}
          dark="rgba(60, 60, 60, 1)"
          darker="rgba(12, 12, 12, 1)"
          darkAlpha="rgba(60, 60, 60, 0.8)"
        />
      )}
    </>
  )
}

export default BuyButton
