import React from 'react'
import { graphql } from 'gatsby'
import Speakers from 'components/SpeakersPage/Speakers'

const SpeakersPage = props => {
  const {
    data: { speakers },
  } = props

  return <Speakers speakers={speakers.edges} />
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
            hasPodcast
            image {
              childImageSharp {
                # Specify the image processing specifications right in the query.
                # Makes it trivial to update as your page's design changes.
                fluid(maxWidth: 134, maxHeight: 134) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            glassesImg {
              childImageSharp {
                # Specify the image processing specifications right in the query.
                # Makes it trivial to update as your page's design changes.
                fluid(maxWidth: 134, maxHeight: 134) {
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
