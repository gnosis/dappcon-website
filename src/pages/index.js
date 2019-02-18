import React from 'react'
import { graphql } from 'gatsby'
import Layout from 'components/Layout'
import MainSection from 'components/IndexPage/MainSection'
import StatsSection from 'components/IndexPage/StatsSection'
import PhotoSection from 'components/IndexPage/PhotoSection'
import SpeakersSection from 'components/IndexPage/SpeakersSection'
import GnosisSection from 'components/IndexPage/GnosisSection';
import SponsorsSection from 'components/IndexPage/SponsorsSection';

export default class IndexPage extends React.Component {
  render() {
    const { data: { speakerPhoto } } = this.props

    return (
      <Layout>
        <MainSection />
        <StatsSection />
        <PhotoSection />
        <SpeakersSection speakerPhoto={speakerPhoto.childImageSharp.fixed} />
        <GnosisSection />
        <SponsorsSection />
      </Layout>
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
  }
`
