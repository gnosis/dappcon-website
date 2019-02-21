import React from 'react'
import CMS from 'netlify-cms'
import { StyleSheetManager } from 'styled-components'
import IndexPagePreview from './preview-templates/IndexPagePreview'
import { LayoutTemplate } from 'components/Layout'

// Component used to Enable netlify CMS to apply the styles added through styled-components
// https://github.com/netlify/netlify-cms/issues/1408
class CSSInjector extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      iframeRef: '',
    }
  }

  componentDidMount() {
    const iframe = document.getElementsByTagName('iframe')[0]
    const iframeHeadElem = iframe.contentDocument.head
    this.setState({ iframeRef: iframeHeadElem })
  }

  render() {
    return (
      <div>
        {this.state.iframeRef && (
          <StyleSheetManager target={this.state.iframeRef}>
            <LayoutTemplate>{this.props.children}</LayoutTemplate>
          </StyleSheetManager>
        )}
      </div>
    )
  }
}

CMS.registerPreviewTemplate('landingPage', props => (
  <CSSInjector>
    <IndexPagePreview {...props} />
  </CSSInjector>
))
