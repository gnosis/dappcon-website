import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from 'templates/index-page'

const IndexPagePreview = ({ entry, getAsset }) => {
  return (
    <IndexPageTemplate
      mainTitle={entry.getIn(['data', 'mainTitle'])}
      aboutDappcon={entry.getIn(['data', 'aboutDappcon'])}
      aboutGnosis={entry.getIn(['data', 'aboutGnosis'])}
      buttonText={entry.getIn(['data', 'buttonText'])}
      stats={entry.getIn(['data', 'stats']).toJS()}
      programPhotoText={entry.getIn(['data', 'programPhotoText'])}
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
