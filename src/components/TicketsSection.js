import React from 'react'
import styled from 'styled-components'
import Footer from 'components/Footer'
import { colors } from 'theme'
import { Link } from 'gatsby'

const Wrapper = styled.section`
  background-color: ${colors.reddishPink};
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 100vh;
  z-index: -1;
`

const StyledLink = styled(Link)`
  font-size: 49px;
  font-weight: 800;
  color: ${colors.white};
  text-decoration: none;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 767px) {
    font-size: 30px;
  }
`

const Text = styled.p`
  transition: .3s color ease-in-out;

  &:hover {
    color: ${colors.black};
  }
`

const TicketsSection = ({ setCookieBannerOpen }) => (
  <Wrapper>
    <StyledLink to="/tickets">
      <Text>Tickets</Text>
    </StyledLink>
    <Footer setCookieBannerOpen={setCookieBannerOpen} />
  </Wrapper>
)

export default TicketsSection
