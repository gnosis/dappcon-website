import React from "react"
import styled from "styled-components"
import Markdown from "react-markdown"
import { UnmountClosed } from "react-collapse"
import Image from "components/PreviewCompatibleImage"
import ButtonLink from "components/ButtonLink"
import mdRenderers from "markdownRenderers"
import { colors } from "theme"

const SContainer = styled.div`
  display: flex;
  width: 100%;
  &:not(:first-child) {
    margin-top: 100px;
  }

  .ReactCollapse--collapse {
    transition: height 500ms;
  }
`

const SLogo = styled.div`
  width: 120px;
  height: 120px;
  & > div {
    border-radius: 8px;
  }
`

const SInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 59%;
  margin: 0 auto 0 19px;
`

const SInfoHeader = styled.div`
  height: 120px;
  margin-bottom: 24px;
  position: relative;
`

const SMarkdown = styled(Markdown)`
  line-height: 1.39;
`

const STitle = styled.h3`
  font-size: 36px;
  font-weight: 800;
  letter-spacing: normal;
  color: ${colors.black};
`

const SDescShort = styled.p`
  font-size: 18px;
  font-weight: 800;
  line-height: 1.39;
  letter-spacing: -0.55px;
  color: ${colors.secondaryBlack};
  margin-top: 12px;
`

const SExpandBtn = styled.button`
  position: absolute;
  bottom: 0;
  text-decoration: underline;
  background: none;
  border: none;
  padding: 0;
  font-family: Averta;
  font-size: 18px;
  font-weight: 800;
  letter-spacing: -0.55px;
  color: ${colors.secondaryBlack};
  cursor: pointer;
`

const Dapp = ({ dapp, onExpand, isExpanded }) => {
  return (
    <SContainer>
      <SLogo>
        <Image image={dapp.logo} />
      </SLogo>
      <SInfoContainer>
        <SInfoHeader>
          <STitle>{dapp.name}</STitle>
          <SDescShort>{dapp.desc_short}</SDescShort>
          <SExpandBtn onClick={() => onExpand(dapp.url)}>
            {isExpanded ? "Reduce" : "Read more"}
          </SExpandBtn>
        </SInfoHeader>
        <UnmountClosed isOpened={isExpanded}>
          <SMarkdown
            source={dapp.desc_long}
            parserOptions={{ commonmark: true }}
            renderers={mdRenderers}
          />
        </UnmountClosed>
      </SInfoContainer>
      <ButtonLink target="_blank" href={dapp.url}>
        Get started
      </ButtonLink>
    </SContainer>
  )
}

export default Dapp
