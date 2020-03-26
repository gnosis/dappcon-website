import React from "react"
import styled from "styled-components"
import Markdown from "react-markdown"
import { UnmountClosed } from "react-collapse"
import Image from "components/PreviewCompatibleImage"
import ButtonLink from "components/ButtonLink"
import HideOnMobile from "components/HideOnMobile"
import ShowOnMobile from "components/ShowOnMobile"
import mdRenderers from "markdownRenderers"
import { colors } from "theme"

const SContainer = styled.div`
  display: flex;
  width: 100%;
  &:not(:first-child) {
    margin-top: 100px;
  }
`

const SLogo = styled.div`
  width: 120px;
  height: 120px;
  & > div {
    width: 120px;
  height: 120px;
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

  @media screen and (max-width: 767px) {
    margin-top: 33px;
  }
`

const STitle = styled.h3`
  font-size: 36px;
  font-weight: 800;
  letter-spacing: normal;
  color: ${colors.black};

  @media screen and (max-width: 767px) {
    font-size: 20px;
  }
`

const SDescShort = styled.p`
  font-size: 18px;
  font-weight: 800;
  line-height: 1.39;
  letter-spacing: -0.55px;
  color: ${colors.secondaryBlack};
  margin-top: 12px;
`

const SMobileGetStartedBtn = styled(ButtonLink)`
  position: absolute;
  bottom: 0px;
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

const SExpandBtnMobile = styled(SExpandBtn)`
  position: initial;
  margin-top: 24px;
`

const Dapp = ({ dapp, onExpand, isExpanded }) => {
  return (
    <>
      <SContainer>
        <SLogo>
          <Image image={dapp.logo} />
        </SLogo>
        <SInfoContainer>
          <SInfoHeader>
            <STitle>{dapp.name}</STitle>
            <ShowOnMobile>
              <SMobileGetStartedBtn target="_blank" href={dapp.url}>
                Get started
              </SMobileGetStartedBtn>
            </ShowOnMobile>
            <HideOnMobile>
              <SDescShort>{dapp.desc_short}</SDescShort>
              <SExpandBtn onClick={() => onExpand(dapp.url)}>
                {isExpanded ? "Reduce" : "Read more"}
              </SExpandBtn>
            </HideOnMobile>
          </SInfoHeader>
          <HideOnMobile>
            <UnmountClosed isOpened={isExpanded}>
              <SMarkdown
                source={dapp.desc_long}
                renderers={mdRenderers}
                escapeHtml={false}
              />
            </UnmountClosed>
          </HideOnMobile>
        </SInfoContainer>
        <HideOnMobile>
          <ButtonLink target="_blank" href={dapp.url}>
            Get started
          </ButtonLink>
        </HideOnMobile>
      </SContainer>
      <ShowOnMobile>
        <SDescShort>{dapp.desc_short}</SDescShort>
        <SExpandBtnMobile onClick={() => onExpand(dapp.url)}>
          {isExpanded ? "Reduce" : "Read more"}
        </SExpandBtnMobile>
        <UnmountClosed isOpened={isExpanded}>
          <SMarkdown
            source={dapp.desc_long}
            renderers={mdRenderers}
            escapeHtml={false}
          />
        </UnmountClosed>
      </ShowOnMobile>
    </>
  )
}

export default Dapp
