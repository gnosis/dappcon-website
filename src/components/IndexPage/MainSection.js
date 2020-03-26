import React from "react"
import styled from "styled-components"
import { colors } from "theme"
import ContentWrapper from "components/ContentWrapper"
import { DappconIllus } from "components/Svg"
import { Link } from "gatsby"

const Wrapper = styled.section`
  height: 100vh;
  background: ${colors.bgWhite};
  display: flex;
  align-items: center;
  justify-content: center;
`

const SContentWrapper = styled(ContentWrapper)`
  width: 100%;
`

const SDappconIllus = styled(DappconIllus)`
  .st0 {
    fill: #141314;
  }
  .st1 {
    font-family: "Averta";
    font-weight: 800;
  }
  .st2 {
    font-size: 72px;
  }
  .st3 {
    font-size: 16px;
  }
  .st4 {
    fill-rule: evenodd;
    clip-rule: evenodd;
  }
  .st5 {
    filter: url(#Adobe_OpacityMaskFilter);
  }
  .st6 {
    fill-rule: evenodd;
    clip-rule: evenodd;
    fill: #ffffff;
  }
  .st7 {
    mask: url(#b_1_);
    fill-rule: evenodd;
    clip-rule: evenodd;
  }
  .st8 {
    filter: url(#Adobe_OpacityMaskFilter_1_);
  }
  .st9 {
    mask: url(#d_1_);
    fill-rule: evenodd;
    clip-rule: evenodd;
  }
  .st10 {
    font-size: 10px;
  }
  .tickets-text {
    opacity: 0;
    transition: opacity 0.3s ease-in-out, fill 0.3s ease-in-out;
  }

  .hoverable {
    transition: fill 0.3s ease-in-out;
  }
  &:hover {
    .tickets-text {
      opacity: 1;
      fill: red;
    }

    .hoverable {
      fill: red;
    }
  }
`

const MainSection = ({
  mainTitle,
  buttonText,
  buyTicketsLink,
  locationAndDate
}) => (
  <Wrapper id="main">
    <SContentWrapper>
      <Link to="/tickets">
        <SDappconIllus />
      </Link>
    </SContentWrapper>
  </Wrapper>
)

export default MainSection
