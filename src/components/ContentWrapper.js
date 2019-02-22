import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 840px;

  @media screen and (max-width: 767px) {
    padding: 0 23px;
  }
`

const ContentWrapper = ({ children, className }) => (
  <Wrapper className={className}>{children}</Wrapper>
)

ContentWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

ContentWrapper.defaultProps = {
  className: '',
}

export default ContentWrapper
