import React from 'react'
import styled from 'styled-components'
import { graphql, Link } from 'gatsby'
import ContentWrapper from 'components/ContentWrapper'
import MobilePageHeading from 'components/MobilePageHeading'
import Markdown from 'react-markdown'
import { colors } from 'theme'

const PageHeading = styled.h1`
  font-size: 69px;
  font-weight: 800;
  color: ${colors.reddishPink};
  margin: 132px 0 71px;

  @media screen and (max-width: 767px) {
    display: none;
  }
`

const StyledLink = styled(Link)`
  display: block;
  margin: 76px 0 84px;
  color: ${colors.reddishPink};
  text-decoration: none;
  font-size: 19px;
  font-weight: 800;

  @media screen and (max-width: 767px) {
    margin: 30px 0;
  }
`

const HideOnMobile = styled.span`
  @media screen and (max-width: 767px) {
    display: none;
  }
`

const StyledMdLink = styled.a`
  color: ${colors.reddishPink};
  text-decoration: none;
`

const MarkdownContainer = styled.div`
  font-size: 14px;

  @media screen and (max-width: 767px) {
    font-size: 8px;
  }
`

const StyledMobileHeading = styled(MobilePageHeading)`
  margin-top: 83px;
`

const markdownRenderers = {
  link: props => (
    <StyledMdLink href={props.href} target="_blank" rel="noopener noreferrer">
      {props.children}
    </StyledMdLink>
  )
}

export const ImprintPageTemplate = ({ title, body }) => (
  <ContentWrapper>
    <PageHeading>{title}</PageHeading>
    <StyledMobileHeading text={title} />
    <MarkdownContainer>
      <Markdown source={body} renderers={markdownRenderers} />
    </MarkdownContainer>
    <StyledLink to="/">
      &lt;- <HideOnMobile>back to homepage</HideOnMobile>
    </StyledLink>
  </ContentWrapper>
)

export default class ImprintPage extends React.Component {
  render() {
    const {
      data: {
        pageData: { rawMarkdownBody, frontmatter: pageData }
      }
    } = this.props
    const { title } = pageData

    return <ImprintPageTemplate title={title} body={rawMarkdownBody} />
  }
}

export const pageQuery = graphql`
  query {
    pageData: markdownRemark(frontmatter: { templateKey: { eq: "imprint-page" } }) {
      rawMarkdownBody
      frontmatter {
        title
      }
    }
  }
`
