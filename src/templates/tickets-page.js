import React from 'react'
import { graphql } from 'gatsby'
import Footer from 'components/Footer'
import MainSection from 'components/TicketsPage/MainSection'
import ApplySection from 'components/TicketsPage/ApplySection'

export const TicketsPageTemplate = ({ title, columns, setCookieBannerOpen }) => (
  <>
    <MainSection title={title} />
    <ApplySection columns={columns} />
    <Footer setCookieBannerOpen={setCookieBannerOpen} />
  </>
)

const TicketsPage = props => {
  const {
    data: {
      pageData: { frontmatter: data },
    },
    setCookieBannerOpen,
  } = props
  const { heading, columns } = data

  return (
    <TicketsPageTemplate
      title={heading}
      columns={Object.values(columns)}
      setCookieBannerOpen={setCookieBannerOpen}
    />
  )
}

export default TicketsPage

export const pageQuery = graphql`
  query {
    pageData: markdownRemark(frontmatter: { templateKey: { eq: "tickets-page" } }) {
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
