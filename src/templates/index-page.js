import React from 'react'
import { graphql } from 'gatsby'
import MainSection from 'components/IndexPage/MainSection'
import StatsSection from 'components/IndexPage/StatsSection'
import PhotoSection from 'components/IndexPage/PhotoSection'
import SpeakersSection from 'components/IndexPage/SpeakersSection'
import GnosisSection from 'components/IndexPage/GnosisSection'
import SponsorsSection from 'components/IndexPage/SponsorsSection'

export const IndexPageTemplate = ({
  mainTitle,
  aboutDappcon,
  aboutGnosis,
  buttonText,
  speakers,
  stats,
  programPhotoText,
}) => (
  <>
    <MainSection mainTitle={mainTitle} buttonText={buttonText} />
    <StatsSection dappconText={aboutDappcon} stats={stats} />
    <PhotoSection text={programPhotoText} />
    {speakers && <SpeakersSection speakers={speakers.edges} />}
    <GnosisSection text={aboutGnosis} />
    {/* <SponsorsSection /> */}
  </>
)

export default class IndexPage extends React.Component {
  render() {
    const {
      data: {
        speakers,
        pageData: { frontmatter: pageData },
      },
    } = this.props
    const {
      mainTitle,
      aboutDappcon,
      aboutGnosis,
      buttonText,
      speakers: indexPageSpeakers,
      stats,
      programPhotoText,
    } = pageData

    const displayedSpeakers = Object.values(indexPageSpeakers)
    speakers.edges = speakers.edges.filter(({ node }) =>
      displayedSpeakers.includes(node.frontmatter.name),
    )

    return (
      <IndexPageTemplate
        mainTitle={mainTitle}
        aboutDappcon={aboutDappcon}
        aboutGnosis={aboutGnosis}
        buttonText={buttonText}
        stats={stats}
        programPhotoText={programPhotoText}
        speakers={speakers}
      />
    )
  }
}

IndexPage.propTypes = {}

export const pageQuery = graphql`
  query {
    pageData: markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        mainTitle
        buttonText
        aboutDappcon
        stats {
          firstStat {
            description
            number
          }
          secondStat {
            description
            number
          }
          thirdStat {
            description
            number
          }
        }
        programPhotoText {
          isLink
          label
          linkURL
        }
        speakers {
          speaker1
          speaker2
          speaker3
          speaker4
        }
        aboutGnosis
      }
    }
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
