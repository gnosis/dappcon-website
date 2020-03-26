import React, { useState } from "react"
import Helmet from "react-helmet"
import styled, { createGlobalStyle } from "styled-components"
import { StaticQuery, graphql, withPrefix } from "gatsby"
import { colors } from "theme"
import reset from "styled-reset"

import DesktopNav from "components/DesktopNav"
import CookieBanner from "components/CookieBanner"
import MobileHeader from "components/MobileHeader"
import TicketsSection from "components/TicketsSection"

const GlobalStyles = createGlobalStyle`
  ${reset}

  @font-face {
    font-family: "Averta";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local("Averta-Regular"), url(${withPrefix(
      "/fonts/38C995_1_0.ttf"
    )}) format('truetype');
  }

  @font-face {
    font-family: 'Averta';
    font-style: normal;
    font-weight: 800;
    font-display: swap;
    src: local("Averta-Extrabold"), url(${withPrefix(
      "/fonts/38C995_0_0.ttf"
    )}) format('truetype');
  }

  body {
    font-family: Averta, sans-serif;
    overflow-x: hidden;
  }

  /* navBlack and navWhite are classes for the desktop navbar,
    see components/DesktopNav.js
  */
  .navBlack {
    color: ${colors.black};
    fill: ${colors.black};

    path {
      fill: ${colors.black};
      transition: fill .2s ease-in-out;
    }
    
    &:hover {
      color: ${colors.reddishPink};
      fill: ${colors.reddishPink};

      path {
        fill: ${colors.reddishPink};
      }
    }
  }

  .navWhite {
    color: ${colors.white};
    fill: ${colors.white};

    path {
      fill: ${colors.white};
      transition: fill .2s ease-in-out;
    }

    &:hover {
      color: ${colors.black};
      stroke: ${colors.black};
      fill: ${colors.black};

      path {
        fill: ${colors.black};
      }
    }
  }
`

const ChildrenContainer = styled.div`
  position: relative;
  margin-bottom: ${props => (props.isTicketsPage ? "inherit" : "100vh")};
`

export const LayoutTemplate = ({
  children,
  location = {},
  headerFooterData = {},
  setCookieBannerOpen
}) => {
  // ticketsPage needs setCookieBannerOpen since the footer is rendered inside the page
  const isTicketsPage = /tickets/.test(location.pathname)
  let childElements = children

  if (isTicketsPage) {
    childElements = React.Children.map(children, child => {
      return React.cloneElement(child, {
        setCookieBannerOpen
      })
    })
  }

  return (
    <>
      <GlobalStyles />
      <DesktopNav location={location} data={headerFooterData} />
      <MobileHeader location={location || {}} data={headerFooterData} />
      <ChildrenContainer isTicketsPage={isTicketsPage}>
        {childElements}
        <div id="pageEnd"></div>
        {/* ^ is needed for changing color of the nav, see DesktopNav.js */}
      </ChildrenContainer>
      {!isTicketsPage && (
        <TicketsSection setCookieBannerOpen={setCookieBannerOpen} />
      )}
      {/* required for mintbase  */}
      <div id="mintbase-app"></div>
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
          headerFooterData: markdownRemark(
            frontmatter: { templateKey: { eq: "index-page" } }
          ) {
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
            <meta
              name="description"
              content={data.site.siteMetadata.description}
            />

            <link
              rel="icon"
              type="image/png"
              href="/img/favicon-32x32.png"
              sizes="32x32"
            />
            <link
              rel="icon"
              type="image/png"
              href="/img/favicon-16x16.png"
              sizes="16x16"
            />
            <meta name="theme-color" content="#fff" />

            <meta property="og:type" content="website" />
            <meta property="og:title" content={data.site.siteMetadata.title} />
            <meta
              property="og:description"
              content={data.site.siteMetadata.description}
            />
            <meta property="og:url" content="https://dappcon.io" />
            <meta
              property="og:image"
              content="/img/og-image.png"
            />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@dappcon_berlin" />
            <meta name="twitter:title" content="DAPPCON" />
            <meta
              name="twitter:description"
              content={data.site.siteMetadata.description}
            />
            <meta name="twitter:creator" content="@dappcon_berlin" />
            <meta
              name="twitter:image:alt"
              content={data.site.siteMetadata.description}
            />
            <meta
              name="twitter:image"
              content="/img/og-image.png"
            />
            <script crossOrigin src="https://firebasestorage.googleapis.com/v0/b/thing-1d2be.appspot.com/o/packages%2Fruntime.js?alt=media&token=83829758-30e4-451d-9804-83fa95f1cbdc"></script>
            <script crossOrigin src="https://firebasestorage.googleapis.com/v0/b/thing-1d2be.appspot.com/o/packages%2Fmain.js?alt=media&token=eea92974-87be-4311-a977-e9d9f9f22dff"></script>
            <script crossOrigin src="https://firebasestorage.googleapis.com/v0/b/thing-1d2be.appspot.com/o/packages%2Fbig.js?alt=media&token=3b30aab0-48f3-4109-88a7-43249821a140"></script>
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
