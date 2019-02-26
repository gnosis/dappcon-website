import React from 'react'
import styled from 'styled-components'
import { graphql, Link } from 'gatsby'
import ContentWrapper from 'components/ContentWrapper'
import MobilePageHeading from 'components/MobilePageHeading'
import Markdown from 'react-markdown'
import { colors } from 'theme'

const PageWrapper = styled.div`
  min-height: calc(100vh - 410px);
  padding: 132px 0 84px;
  background: ${colors.bgWhite};

  @media screen and (max-width: 767px) {
    padding: 83px 0 30px;
  }
`

const PageHeading = styled.h1`
  font-size: 69px;
  font-weight: 800;
  color: ${colors.reddishPink};
  margin-bottom: 71px;

  @media screen and (max-width: 767px) {
    display: none;
  }
`

const StyledLink = styled(Link)`
  display: block;
  margin-top: 76px;
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

const markdownRenderers = {
  link: props => (
    <StyledMdLink href={props.href} target="_blank" rel="noopener noreferrer">
      {props.children}
    </StyledMdLink>
  )
}

export const ImprintPageTemplate = ({ title, body }) => (
  <PageWrapper>
    <ContentWrapper>
      <PageHeading>{title}</PageHeading>
      <MobilePageHeading text={title} />
      <MarkdownContainer>
        <Markdown source={body} renderers={markdownRenderers} />
      </MarkdownContainer>
      <StyledLink to="/">
        &lt;- <HideOnMobile>back to homepage</HideOnMobile>
      </StyledLink>
    </ContentWrapper>
  </PageWrapper>
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
