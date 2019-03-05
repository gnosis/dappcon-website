import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import { colors } from 'theme'

const Wrapper = styled(BackgroundImage)`
  height: 420px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 49px;

  h3 {
    font-weight: 800;
    color: ${colors.white};
  }

  @media screen and (max-width: 767px) {
    height: 167px;
    font-size: 20px;
  }
`

const StyledLink = styled(Link)`
  font-weight: 800;
  color: ${colors.white};
  text-decoration: none;
  transition: color 0.3s ease-out;

  &:hover {
    color: ${colors.veryLightPink};
  }
`

const PhotoSection = ({ text }) => (
  <StaticQuery
    query={graphql`
      query {
        bg: file(relativePath: { eq: "photo@2x.jpg" }) {
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
      <div id="photo">
        <Wrapper fluid={data.bg.childImageSharp.fluid}>
          {text.isLink ? <StyledLink to={text.linkURL}>{text.label}</StyledLink> : <h3>{text.label}</h3>}
        </Wrapper>
      </div>
    )}
  </StaticQuery>
)

export default PhotoSection
