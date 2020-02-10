import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Footer from 'components/Footer'
import MainSection from 'components/TicketsPage/MainSection'
import BuySection from 'components/TicketsPage/BuySection'
import { colors } from 'theme'

const PageContainer = styled.div`
  min-height: 100vh;
  background-color: ${colors.reddishPink};

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`

export const TicketsPageTemplate = ({ title, columns, setCookieBannerOpen }) => (
  <PageContainer>
    <MainSection title={title} />
    <BuySection columns={columns} />
    <Footer setCookieBannerOpen={setCookieBannerOpen} />
  </PageContainer>
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
            cta
            isActive
          }
          secondCol {
            title
            description
            url
            cta
            isActive
          }
          thirdCol {
            title
            description
            url
            cta
            isActive
          }
        }
      }
    }
  }
`
