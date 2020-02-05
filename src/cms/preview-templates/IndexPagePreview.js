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
      statsHeading={entry.getIn(['data', 'statsHeading'])}
      statsSentence1={entry.getIn(['data', 'statsSentence1'])}
      statsSentence2={entry.getIn(['data', 'statsSentence2'])}
      buttonText={entry.getIn(['data', 'buttonText'])}
      locationAndDate={entry.getIn(['data', 'locationAndDate'])}
      stats={entry.getIn(['data', 'stats']).toJS()}
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
