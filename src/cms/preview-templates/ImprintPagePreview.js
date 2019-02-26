import React from 'react'
import PropTypes from 'prop-types'
import { ImprintPageTemplate } from 'templates/imprint-page'

const ImprintPagePreview = ({ entry }) => (
  <ImprintPageTemplate title={entry.getIn(['data', 'title'])} body={entry.getIn(['data', 'body'])} />
)

ImprintPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  getAsset: PropTypes.func
}

export default ImprintPagePreview
