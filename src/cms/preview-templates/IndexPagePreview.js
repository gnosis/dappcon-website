import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from 'templates/index-page'

const getPropWithGraphQLStructure = (propName, fieldsMetaData) => {
  const values = { edges: [] }
  const unformatted = fieldsMetaData.getIn([propName])

  if (unformatted) {
    const unformattedObject = unformatted.toJS()
    values.edges = Object.values(unformattedObject).map(edges => ({
      node: {
        frontmatter: {
          ...Object.values(edges[propName])[0],
        },
      },
    }))
  }

  return values
}

const IndexPagePreview = ({ entry, fieldsMetaData }) => {
  const speakers = getPropWithGraphQLStructure('speakers', fieldsMetaData)
  const sponsors = []

  return (
    <IndexPageTemplate
      mainTitle={entry.getIn(['data', 'mainTitle'])}
      aboutDappcon={entry.getIn(['data', 'aboutDappcon'])}
      aboutGnosis={entry.getIn(['data', 'aboutGnosis'])}
      buttonText={entry.getIn(['data', 'buttonText'])}
      stats={entry.getIn(['data', 'stats']).toJS()}
      programPhotoText={entry.getIn(['data', 'programPhotoText'])}
      speakers={speakers}
      sponsors={sponsors}
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
