import React, { useState } from "react"
import styled from "styled-components"
import HideOnMobile from "components/HideOnMobile"
import { colors } from "theme"

const SContainer = styled.div`
  position: absolute;
  top: 200px;
  background: ${colors.black};
  width: 50%;
  display: flex;
  justify-content: flex-end;
  z-index: 10;
  left: ${p => (p.isOpen ? 0 : "-50%")};
  transition: left 0.3s ease-in-out;

  @media screen and (max-width: 1000px) {
    justify-content: center;
    width: 100%;
    left: ${p => (p.isOpen ? '-40px' : "-100%")};
  }
`

const SButton = styled.button`
  transform: rotate(-90deg);
  position: absolute;
  right: -81px;
  top: 41px;
  background: ${colors.reddishPink};
  color: ${colors.bgWhite};
  font-size: 16px;
  padding: 10px 18px;
  font-weight: 800;
  font-family: Averta;
  width: 122px;
  box-sizing: border-box;
  cursor: pointer;
  outline: 0;
  border: 0;
`

const Video2019 = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => setIsOpen(currentIsOpen => !currentIsOpen)

  return (
    <HideOnMobile>
      <SContainer isOpen={isOpen}>
        <iframe
          title="DappCon 2019 video"
          width="605"
          height="400"
          src="https://www.youtube-nocookie.com/embed/ZoqTK6nJI9k"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <SButton onClick={handleClick}>
          {isOpen ? "Close video" : "Play video"}
        </SButton>
      </SContainer>
    </HideOnMobile>
  )
}

export default Video2019
