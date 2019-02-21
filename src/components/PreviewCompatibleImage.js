import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

const PreviewCompatibleImage = ({ image, style }) => {
  const { alt = '', childImageSharp } = image

  if (!!image && !!image.childImageSharp) {
    return <Img fixed={image.childImageSharp.fixed} alt={alt} />
  }

  if (!!childImageSharp) {
    return <Img fixed={childImageSharp.fixed} alt={alt} />
  }

  if (!!image && typeof image === 'string') return <img src={image} alt={alt} style={style} />

  return null
}

PreviewCompatibleImage.propTypes = {
  image: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      alt: PropTypes.string,
      childImageSharp: PropTypes.object,
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      style: PropTypes.object,
    }),
  ]).isRequired,
  style: PropTypes.object,
}

export default PreviewCompatibleImage
