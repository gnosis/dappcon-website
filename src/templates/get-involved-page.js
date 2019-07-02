import React from 'react'
import { graphql } from 'gatsby'
import Footer from 'components/Footer'
import MainSection from 'components/GetInvolvedPage/MainSection'
import ApplySection from 'components/GetInvolvedPage/ApplySection'

export const GetInvolvedPageTemplate = ({ title, columns, setCookieBannerOpen }) => (
  <>
    <MainSection title={title} />
    <ApplySection columns={columns} />
    <Footer setCookieBannerOpen={setCookieBannerOpen} />
  </>
)

const GetInvolvedPage = props => {
  const {
    data: {
      pageData: { frontmatter: data },
    },
    setCookieBannerOpen,
  } = props
  const { heading, columns } = data

  return (
    <GetInvolvedPageTemplate
      title={heading}
      columns={Object.values(columns)}
      setCookieBannerOpen={setCookieBannerOpen}
    />
  )
}

export default GetInvolvedPage

export const pageQuery = graphql`
  query {
    pageData: markdownRemark(frontmatter: { templateKey: { eq: "get-involved-page" } }) {
      frontmatter {
        heading
        columns {
          firstCol {
            title
            description
            url
          }
          secondCol {
            title
            description
            url
          }
          thirdCol {
            title
            description
            url
          }
        }
      }
    }
  }
`
