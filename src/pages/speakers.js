import React from 'react'
import { graphql } from 'gatsby'
import Speakers from 'components/SpeakersPage/Speakers'

export default class SpeakersPage extends React.Component {
  render() {
    const {
      data: { speakers }
    } = this.props

    return (
      <>
        <Speakers speakers={speakers.edges} />
      </>
    )
  }
}

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
  }
`
