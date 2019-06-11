import React, { useState } from 'react'
import Helmet from 'react-helmet'
import styled, { createGlobalStyle } from 'styled-components'
import { StaticQuery, graphql, withPrefix } from 'gatsby'
import reset from 'styled-reset'

import DesktopNav from 'components/DesktopNav'
import CookieBanner from 'components/CookieBanner'
import MobileHeader from 'components/MobileHeader'
import Invaders from 'components/Invaders'
import GetInvolvedSection from 'components/GetInvolvedSection'

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

const ChildrenContainer = styled.div`
  position: relative;
  margin-bottom: ${props => (props.isGetInvolvedPage ? 'inherit' : '100vh')};
`

const disabledInvadersPages = ['/imprint', '/cookie-policy', '/privacy-policy']

export const LayoutTemplate = ({
  children,
  location = {},
  headerFooterData = {},
  setCookieBannerOpen,
}) => {
  // getInvolvedPage needs setCookieBannerOpen since the footer is rendered inside the page
  const isGetInvolvedPage = /get-involved/.test(location.pathname)
  let childElements = children

  if (isGetInvolvedPage) {
    childElements = React.Children.map(children, child => {
      return React.cloneElement(child, {
        setCookieBannerOpen,
      })
    })
  }

  return (
    <>
      <GlobalStyles />
      <DesktopNav location={location} data={headerFooterData} />
      <MobileHeader location={location || {}} data={headerFooterData} />
      {!disabledInvadersPages.includes(location.pathname) && <Invaders />}
      <ChildrenContainer isGetInvolvedPage={isGetInvolvedPage}>
        {childElements}
        <div id="pageEnd"></div>
        {/* ^ is needed for changing color of the nav, see DesktopNav.js */}
      </ChildrenContainer>
      <GetInvolvedSection setCookieBannerOpen={setCookieBannerOpen} />
    </>
  )
}

const TemplateWrapper = props => {
  const [isCookieBannerOpen, setCookieBannerOpen] = useState(false)

  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
              description
            }
          }
          headerFooterData: markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
            frontmatter {
              speakerApplyLink
              sponsorInfoLink
              buyTicketsLink
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

            <link rel="icon" type="image/png" href="/img/favicon-32x32.png" sizes="32x32" />
            <link rel="icon" type="image/png" href="/img/favicon-16x16.png" sizes="16x16" />
            <meta name="theme-color" content="#fff" />

            <meta property="og:type" content="website" />
            <meta property="og:title" content={data.site.siteMetadata.title} />
            <meta property="og:description" content={data.site.siteMetadata.description} />
            <meta property="og:url" content="https://dappcon.io" />
            <meta property="og:image" content="https://dappcon.io/img/og-image.png" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@dappcon_berlin" />
            <meta name="twitter:title" content="DAPPCON" />
            <meta name="twitter:description" content={data.site.siteMetadata.description} />
            <meta name="twitter:creator" content="@dappcon_berlin" />
            <meta name="twitter:image:alt" content={data.site.siteMetadata.description} />
            <meta name="twitter:image" content="https://dappcon.io/img/og-image.png" />
          </Helmet>
          <LayoutTemplate
            {...props}
            headerFooterData={data.headerFooterData.frontmatter}
            setCookieBannerOpen={setCookieBannerOpen}
          />
          <CookieBanner
            isCookieBannerOpen={isCookieBannerOpen}
            setCookieBannerOpen={setCookieBannerOpen}
          />
        </div>
      )}
    />
  )
}

export default TemplateWrapper
