import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { PodcastIcon } from 'components/Svg'
import { colors } from 'theme'

const Container = styled.div`
  background-color: ${colors.reddishPink};
  width: 177px;
  height: 269px;
  padding: 29px 22px 19px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  svg {
    width: 110px;
    height: 128px;
  }

  @media screen and (max-width: 767px) {
    width: 65px;
    height: 140px;

    svg {
      width: 25px;
      height: 30px;
    }
  }
`

const SText = styled.p`
  color: ${colors.white};
  font-weight: bolder;
  font-size: 26px;

  @media screen and (max-width: 767px) {
    font-size: 12px;
    font-weight: bold;
  }
`

const PodcastLink = () => (
  <Link to="/podcast" style={{ textDecoration: 'none' }}>
    <Container>
      <PodcastIcon />
      <SText>
        DAPPCON
        <br />
        PODCAST
      </SText>
    </Container>
  </Link>
)

export default PodcastLink
