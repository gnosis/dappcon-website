import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

const PreviewCompatibleImage = ({ image, style, className = '' }) => {
  const { alt = '' } = image

  if (!!image && !!image.childImageSharp && !!image.childImageSharp.fixed) {
    return <Img className={className} fixed={image.childImageSharp.fixed} alt={alt} />
  }

  if (!!image && !!image.childImageSharp && !!image.childImageSharp.fluid) {
    return <Img className={className} fluid={image.childImageSharp.fluid} alt={alt} />
  }

  if (!!image && typeof image === 'string') return <img className={className} src={image} alt={alt} style={style} />

  return null
}

PreviewCompatibleImage.propTypes = {
  image: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      alt: PropTypes.string,
      childImageSharp: PropTypes.object,
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      style: PropTypes.object
    })
  ]).isRequired,
  style: PropTypes.object
}

export default PreviewCompatibleImage
