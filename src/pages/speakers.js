import React from 'react'
import { graphql } from 'gatsby'
import Speakers from 'components/SpeakersPage/Speakers'

const SpeakersPage = props => {
  const {
    data: { speakers, headerFooterData },
  } = props

  return <Speakers speakers={speakers.edges} speakerApplyLink={headerFooterData.frontmatter.speakerApplyLink} />
}

export default SpeakersPage

export const pageQuery = graphql`
  query {
    speakers: allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "speaker" } } }) {
      edges {
        node {
          frontmatter {
            name
            company
            position
            image {
              childImageSharp {
                # Specify the image processing specifications right in the query.
                # Makes it trivial to update as your page's design changes.
                fluid(maxWidth: 134) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
    headerFooterData: markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        speakerApplyLink
      }
    }
  }
`
