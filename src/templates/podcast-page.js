import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Footer from 'components/Footer'
import ContentWrapper from 'components/ContentWrapper'
import { colors } from 'theme'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${colors.reddishPink};
`

export const GetInvolvedPageTemplate = ({ title, columns, setCookieBannerOpen }) => (
  <Container>
    <ContentWrapper>Sup</ContentWrapper>
  </Container>
)

const GetInvolvedPage = props => <GetInvolvedPageTemplate />

export default GetInvolvedPage

// export const pageQuery = graphql`
//   query {
//     pageData: markdownRemark(frontmatter: { templateKey: { eq: "get-involved-page" } }) {
//       frontmatter {
//         heading
//         columns {
//           firstCol {
//             title
//             description
//             url
//           }
//           secondCol {
//             title
//             description
//             url
//           }
//           thirdCol {
//             title
//             description
//             url
//           }
//         }
//       }
//     }
//   }
// `
