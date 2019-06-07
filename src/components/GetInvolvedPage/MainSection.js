import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import { colors } from 'theme'
import ContentWrapper from 'components/ContentWrapper'

const Wrapper = styled.section`
  height: 100vh;
  position: relative;
  background-color: ${colors.reddishPink};
`

const StyledContentWrapper = styled(ContentWrapper)`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Heading = styled.h1`
  font-size: 49px;
  color: ${colors.white};
  line-height: normal;
  font-weight: 800;
  max-width: 505px;
  z-index: 1;

  @media screen and (max-width: 767px) {
    font-size: 30px;
    max-width: 279px;
  }
`

const Image = styled(BackgroundImage)`
  height: 66vh;
  width: 33vw;
  top: 0;
  right: 0;
  background-position: right center;

  @media screen and (max-width: 767px) {
    width: 50vw;
    height: 50vh;
  }
`

const MainSection = () => (
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
      <Wrapper>
        <StyledContentWrapper>
          <Heading>
            It’s Dappening!
            <br />
            Be part of
            <br />
            Dappcon 2019
          </Heading>
        </StyledContentWrapper>
        <Image fluid={data.bg.childImageSharp.fluid} style={{ position: 'absolute' }} />
      </Wrapper>
    )}
  </StaticQuery>
)

export default MainSection
