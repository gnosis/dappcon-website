import React from 'react'
import { graphql } from 'gatsby'
import MainSection from 'components/IndexPage/MainSection'
import StatsSection from 'components/IndexPage/StatsSection'
import PhotoSection from 'components/IndexPage/PhotoSection'
import SpeakersSection from 'components/IndexPage/SpeakersSection'
import SponsorsSection from 'components/IndexPage/SponsorsSection'

export const IndexPageTemplate = ({
  mainTitle,
  aboutDappcon,
  buttonText,
  buyTicketsLink,
  aboutDappconLeftCol,
  aboutDappconRightCol,
  speakers,
  stats,
  programPhotoText,
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
    <StatsSection
      aboutDappconLeftCol={aboutDappconLeftCol}
      aboutDappconRightCol={aboutDappconRightCol}
      stats={stats}
    />
    <PhotoSection text={programPhotoText} />
    {speakers && <SpeakersSection speakers={speakers.edges} />}
    <SponsorsSection sponsors={sponsors} />
  </>
)

const IndexPage = props => {
  const {
    data: {
      speakers,
      pageData: { frontmatter: pageData },
      sponsors,
    },
  } = props
  const {
    mainTitle,
    aboutDappconRightCol,
    aboutDappconLeftCol,
    buttonText,
    speakers: indexPageSpeakers,
    stats,
    programPhotoText,
    buyTicketsLink,
    locationAndDate,
  } = pageData

  const displayedSpeakers = Object.values(indexPageSpeakers)
  speakers.edges = speakers.edges.filter(({ node }) =>
    displayedSpeakers.includes(node.frontmatter.name),
  )

  const sortedSponsors = sponsors.edges
    .map(sponsor => sponsor.node.frontmatter)
    .sort((a, b) => b.type - a.type)

  return (
    <IndexPageTemplate
      mainTitle={mainTitle}
      aboutDappconLeftCol={aboutDappconLeftCol}
      aboutDappconRightCol={aboutDappconRightCol}
      buyTicketsLink={buyTicketsLink}
      buttonText={buttonText}
      stats={stats}
      programPhotoText={programPhotoText}
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
    pageData: markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        mainTitle
        buttonText
        buyTicketsLink
        aboutDappconLeftCol
        aboutDappconRightCol
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
      }
    }
  }
`
