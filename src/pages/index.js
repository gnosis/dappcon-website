import React from 'react'
import { graphql } from 'gatsby'
import MainSection from 'components/IndexPage/MainSection'
import StatsSection from 'components/IndexPage/StatsSection'
import PhotoSection from 'components/IndexPage/PhotoSection'
import SpeakersSection from 'components/IndexPage/SpeakersSection'
import GnosisSection from 'components/IndexPage/GnosisSection';
import SponsorsSection from 'components/IndexPage/SponsorsSection';

export default class IndexPage extends React.Component {
  render() {
    const { data: { speakers } } = this.props

    return (
      <>
        <MainSection />
        <StatsSection />
        <PhotoSection />
        <SpeakersSection speakers={speakers.edges} />
        <GnosisSection />
        <SponsorsSection />
      </>
    )
  }
}

IndexPage.propTypes = {

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
    speakers: allMarkdownRemark(limit: 4, filter: { frontmatter: { templateKey: { eq: "speaker" } } }) {
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
                fixed(width: 134, height: 134) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`
