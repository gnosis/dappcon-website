import React, { useState } from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import ContentWrapper from "components/ContentWrapper"
import Dapp from "components/DappsPage/Dapp"
import { colors } from "theme"

const Wrapper = styled.section`
  min-height: 100vh;
  background: ${colors.bgWhite};
  display: flex;
  flex-direction: column;
  padding: 200px 0;
`

const DappsPage = props => {
  const {
    data: { dapps }
  } = props
  const [expandedDapp, setExpandedDapp] = useState()

  const handleExpandClick = dappUrl => {
    setExpandedDapp(currentlyExpanded => {
      // same dapp clicked
      if (dappUrl === currentlyExpanded) {
        return undefined
      }

      return dappUrl
    })
  }

  return (
    <Wrapper id="dapps">
      <ContentWrapper>
        {dapps.edges.map(dapp => (
          <Dapp
            key={dapp.node.frontmatter.url}
            dapp={dapp.node.frontmatter}
            isExpanded={dapp.node.frontmatter.url === expandedDapp}
            onExpand={handleExpandClick}
          />
        ))}
      </ContentWrapper>
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
            desc_short
            desc_long
            logo {
              childImageSharp {
                # Specify the image processing specifications right in the query.
                # Makes it trivial to update as your page's design changes.
                fluid(maxWidth: 120, maxHeight: 120) {
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
