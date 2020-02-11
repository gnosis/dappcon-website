import React from "react"
import styled from "styled-components"
import { Link, StaticQuery, graphql } from 'gatsby'
import BackgroundImage from "gatsby-background-image"
import Footer from "components/Footer"
import { colors } from "theme"

const Wrapper = styled(BackgroundImage)`
  /* important because of gatsby-background-image defaults  */
  position: fixed !important; 
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
  transition: 0.3s color ease-in-out;

  &:hover {
    color: ${colors.black};
  }
`

const TicketsSection = ({ setCookieBannerOpen }) => (
  <StaticQuery
    query={graphql`
      query {
        bg: file(relativePath: { eq: "venue_photo.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
  >
    {data => (
      <Wrapper fluid={data.bg.childImageSharp.fluid}>
        <StyledLink to="/tickets">
          <Text>Tickets</Text>
        </StyledLink>
        <Footer setCookieBannerOpen={setCookieBannerOpen} />
      </Wrapper>
    )}
  </StaticQuery>
)

export default TicketsSection
