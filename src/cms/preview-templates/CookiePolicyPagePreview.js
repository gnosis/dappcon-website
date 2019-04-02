import React from 'react'
import PropTypes from 'prop-types'
import { CookiePolicyPageTemplate } from 'templates/cookie-policy-page'

const CookiePolicyPagePreview = ({ entry }) => (
  <CookiePolicyPageTemplate
    title={entry.getIn(['data', 'title'])}
    body={entry.getIn(['data', 'body'])}
  />
)

CookiePolicyPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default CookiePolicyPagePreview
