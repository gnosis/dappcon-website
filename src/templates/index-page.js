import React from "react"
import { graphql } from "gatsby"
import MainSection from "components/IndexPage/MainSection"
import CovidUpdateSection from "components/IndexPage/CovidUpdateSection"
import Edition2019Section from "components/IndexPage/Edition2019Section"

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
  speakers2019,
  dapps,
  stats,
  locationAndDate,
  sponsors,
}) => (
  <>
    <MainSection
      mainTitle={mainTitle}
      buttonText={buttonText}
      buyTicketsLink={buyTicketsLink}
      locationAndDate={locationAndDate}
    />
    {/* <StatsSection
      statsHeading={statsHeading}
      statsSentence1={statsSentence1}
      statsSentence2={statsSentence2}
      stats={stats}
    />
    <DappsSection
      dappsTextLC={dappsTextLC}
      dappsTextRC={dappsTextRC}
      dapps={dapps}
    /> */}
    <CovidUpdateSection />
    {speakers2019 && <Edition2019Section speakers={speakers2019} />}
    {/* <MediaPartnersSection />
    <SponsorsSection sponsors={sponsors} /> */}
  </>
)

const IndexPage = (props) => {
  const {
    data: {
      speakers2019,
      pageData: { frontmatter: pageData },
      sponsors,
      dapps,
    },
  } = props
  const {
    mainTitle,
    statsHeading,
    statsSentence1,
    statsSentence2,
    dappsTextLC,
    dappsTextRC,
    buttonText,
    speakers2019: indexPage2019Speakers,
    stats,
    buyTicketsLink,
    locationAndDate,
  } = pageData

  const displayedSpeakersNames = Object.values(indexPage2019Speakers)
  let displayed2019Speakers = []
  for (let name of displayedSpeakersNames) {
    const speaker = speakers2019.edges.find(
      ({ node }) => node.frontmatter.name === name
    )

    if (speaker) {
      displayed2019Speakers.push(speaker)
    }
  }

  const sortedSponsors = sponsors.edges
    .map((sponsor) => sponsor.node.frontmatter)
    .sort((a, b) => b.type - a.type)

  const dappsSerialized = Object.values(dapps)[0].map(
    ({ node }) => node.frontmatter
  )

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
      dapps={dappsSerialized}
      speakers2019={displayed2019Speakers}
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
        speakers2019 {
          speaker1
          speaker2
          speaker3
          speaker4
          speaker5
          speaker6
        }
      }
    }
    speakers2019: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "speaker2019" } } }
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
    dapps: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "dapps2020" } } }
    ) {
      edges {
        node {
          frontmatter {
            name
            url
            logo {
              childImageSharp {
                # Specify the image processing specifications right in the query.
                # Makes it trivial to update as your page's design changes.
                fluid(maxWidth: 100) {
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
