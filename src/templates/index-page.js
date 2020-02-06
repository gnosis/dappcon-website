import React from "react"
import { graphql } from "gatsby"
import MainSection from "components/IndexPage/MainSection"
import StatsSection from "components/IndexPage/StatsSection"
import DappsSection from "components/IndexPage/DappsSection"
import SpeakersSection from "components/IndexPage/SpeakersSection"
import SponsorsSection from "components/IndexPage/SponsorsSection"

export const IndexPageTemplate = ({
  mainTitle,
  aboutDappcon,
  buttonText,
  buyTicketsLink,
  statsHeading,
  statsSentence1,
  statsSentence2,
  dappsTextRC,
  dappsTextLC,
  speakers,
  stats,
  locationAndDate,
  sponsors
}) => (
  <>
    <MainSection
      mainTitle={mainTitle}
      buttonText={buttonText}
      buyTicketsLink={buyTicketsLink}
      locationAndDate={locationAndDate}
    />
    <StatsSection
      statsHeading={statsHeading}
      statsSentence1={statsSentence1}
      statsSentence2={statsSentence2}
      stats={stats}
    />
    <DappsSection dappsTextLC={dappsTextLC} dappsTextRC={dappsTextRC} />
    {speakers && <SpeakersSection speakers={speakers.edges} />}
    <SponsorsSection sponsors={sponsors} />
  </>
)

const IndexPage = props => {
  const {
    data: {
      speakers,
      pageData: { frontmatter: pageData },
      sponsors
    }
  } = props
  const {
    mainTitle,
    statsHeading,
    statsSentence1,
    statsSentence2,
    dappsTextLC,
    dappsTextRC,
    buttonText,
    speakers: indexPageSpeakers,
    stats,
    buyTicketsLink,
    locationAndDate
  } = pageData

  const displayedSpeakers = Object.values(indexPageSpeakers)
  speakers.edges = speakers.edges.filter(({ node }) =>
    displayedSpeakers.includes(node.frontmatter.name)
  )

  const sortedSponsors = sponsors.edges
    .map(sponsor => sponsor.node.frontmatter)
    .sort((a, b) => b.type - a.type)

  return (
    <IndexPageTemplate
      mainTitle={mainTitle}
      statsHeading={statsHeading}
      statsSentence1={statsSentence1}
      statsSentence2={statsSentence2}
      buyTicketsLink={buyTicketsLink}
      dappsTextLC={dappsTextLC}
      dappsTextRC={dappsTextRC}
      buttonText={buttonText}
      stats={stats}
      speakers={speakers}
      locationAndDate={locationAndDate}
      sponsors={sortedSponsors}
    />
  )
}

IndexPage.propTypes = {}

export default IndexPage

export const pageQuery = graphql`
  query {
    pageData: markdownRemark(
      frontmatter: { templateKey: { eq: "index-page" } }
    ) {
      frontmatter {
        mainTitle
        buttonText
        buyTicketsLink
        statsHeading
        statsSentence1
        statsSentence2
        dappsTextRC
        dappsTextLC
        locationAndDate
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
        speakers {
          speaker1
          speaker2
          speaker3
          speaker4
        }
      }
    }
    speakers: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "speaker" } } }
    ) {
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
    sponsors: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "sponsor" } } }
    ) {
      edges {
        node {
          frontmatter {
            name
            type
            url
            image {
              publicURL
            }
          }
        }
      }
    }
  }
`
