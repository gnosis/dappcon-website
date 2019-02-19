import React from 'react'
import { graphql } from 'gatsby'
import Speakers from 'components/SpeakersPage/Speakers'

export default class SpeakersPage extends React.Component {
  render() {
    const {
      data: { speakerPhoto },
    } = this.props

    return (
      <>
        <Speakers speakerPhoto={speakerPhoto.childImageSharp.fixed} />
      </>
    )
  }
}

export const pageQuery = graphql`
  query {
    speakerPhoto: file(relativePath: { eq: "cat.jpeg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 134, height: 134) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
