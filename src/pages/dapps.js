import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import ContentWrapper from "components/ContentWrapper"
import Dapp from "components/DappsPage/Dapp"
import { colors } from "theme"

const Wrapper = styled.section`
  min-height: 100vh;
  background: ${colors.bgWhite};
  display: flex;
  align-items: center;
  justify-content: center;
`

const DappsPage = props => {
  const {
    data: { dapps }
  } = props

  console.log(dapps)

  return (
    <Wrapper id="dapps">
      <ContentWrapper>test</ContentWrapper>
    </Wrapper>
  )
}

export default DappsPage

export const pageQuery = graphql`
  query {
    dapps: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "dapps2020" } } }
    ) {
      edges {
        node {
          frontmatter {
            name
            url
            logo {
              childImageSharp {
                # Specify the image processing specifications right in the query.
                # Makes it trivial to update as your page's design changes.
                fluid(maxWidth: 120, maxHeight: 134) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`
