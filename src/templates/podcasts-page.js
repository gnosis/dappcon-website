import React from 'react'
import { graphql } from 'gatsby'
import Footer from 'components/Footer'
import MainSection from 'components/GetInvolvedPage/MainSection'
import ApplySection from 'components/GetInvolvedPage/ApplySection'

export const GetInvolvedPageTemplate = ({ title, columns, setCookieBannerOpen }) => null

const GetInvolvedPage = props => null

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
