import React from 'react'
import Helmet from 'react-helmet'
import { createGlobalStyle } from 'styled-components'
import { StaticQuery, graphql, withPrefix } from 'gatsby'
import reset from 'styled-reset'

import Navbar from 'components/Navbar'
import NavLogo from 'components/NavLogo'
import Footer from 'components/Footer'

const GlobalStyles = createGlobalStyle`
  ${reset}

  @font-face {
    font-family: "Averta";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local("Averta-Regular"), url(${withPrefix('/fonts/38C995_1_0.ttf')}) format('truetype');
  }

  @font-face {
    font-family: 'Averta';
    font-style: normal;
    font-weight: 800;
    font-display: swap;
    src: local("Averta-Extrabold"), url(${withPrefix('/fonts/38C995_0_0.ttf')}) format('truetype');
  }

  body {
    font-family: Averta, sans-serif;
  }
`

export const LayoutTemplate = ({ children, location }) => (
  <>
    <GlobalStyles />
    <NavLogo location={location} />
    <Navbar location={location} />
    <div>{children}</div>
    <Footer />
  </>
)

const TemplateWrapper = props => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => (
      <div>
        <Helmet>
          <html lang="en" />
          <title>{data.site.siteMetadata.title}</title>
          <meta name="description" content={data.site.siteMetadata.description} />

          <link rel="apple-touch-icon" sizes="180x180" href="/img/apple-touch-icon.png" />
          <link rel="icon" type="image/png" href="/img/favicon-32x32.png" sizes="32x32" />
          <link rel="icon" type="image/png" href="/img/favicon-16x16.png" sizes="16x16" />

          <link rel="mask-icon" href="/img/safari-pinned-tab.svg" color="#ff4400" />
          <meta name="theme-color" content="#fff" />

          <meta property="og:type" content="business.business" />
          <meta property="og:title" content={data.site.siteMetadata.title} />
          <meta property="og:url" content="/" />
          <meta property="og:image" content="/img/og-image.svg" />
        </Helmet>
        <LayoutTemplate {...props} />
      </div>
    )}
  />
)

export default TemplateWrapper
