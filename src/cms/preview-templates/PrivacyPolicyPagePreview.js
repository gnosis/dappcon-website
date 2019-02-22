import React from 'react'
import PropTypes from 'prop-types'
import { PrivacyPolicyPageTemplate } from 'templates/privacy-policy-page'

const PrivacyPolicyPagePreview = ({ entry }) => (
  <PrivacyPolicyPageTemplate
    title={entry.getIn(['data', 'title'])}
    body={entry.getIn(['data', 'body'])}
  />
)

PrivacyPolicyPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default PrivacyPolicyPagePreview
