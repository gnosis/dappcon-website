import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from 'templates/index-page'

const IndexPagePreview = ({ entry, fieldsMetaData }) => {
  const speakers = { edges: [] }

  if (fieldsMetaData.getIn(['speakers'])) {
    const speakersUnformatted = fieldsMetaData.getIn(['speakers']).toJS()
    speakers.edges = Object.values(speakersUnformatted).map(({ speakers }) => ({
      node: {
        frontmatter: {
          ...Object.values(speakers)[0],
        },
      },
    }))
  }

  return (
    <IndexPageTemplate
      mainTitle={entry.getIn(['data', 'mainTitle'])}
      aboutDappcon={entry.getIn(['data', 'aboutDappcon'])}
      aboutGnosis={entry.getIn(['data', 'aboutGnosis'])}
      buttonText={entry.getIn(['data', 'buttonText'])}
      stats={entry.getIn(['data', 'stats']).toJS()}
      programPhotoText={entry.getIn(['data', 'programPhotoText'])}
      speakers={speakers}
    />
  )
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default IndexPagePreview
