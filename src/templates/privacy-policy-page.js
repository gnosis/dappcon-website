import React from 'react'
import styled from 'styled-components'
import { graphql, Link } from 'gatsby'
import ContentWrapper from 'components/ContentWrapper'
import Markdown from 'react-markdown'
import { colors } from 'theme'

const PageHeading = styled.h1`
  font-size: 69px;
  font-weight: 800;
  color: ${colors.reddishPink};
  margin: 132px 0 71px;
`

const StyledLink = styled(Link)`
  display: block;
  margin-top: 76px;
  color: ${colors.reddishPink};
  text-decoration: none;
  font-size: 19px;
  margin-bottom: 84px;
`

const StyledMdLink = styled.a`
  color: ${colors.reddishPink};
  text-decoration: none;
`

const MarkdownContainer = styled.div`
  font-size: 14px;
`

const markdownRenderers = {
  link: props => (
    <StyledMdLink href={props.href} target="_blank" rel="noopener noreferrer">
      {props.children}
    </StyledMdLink>
  ),
}

export const PrivacyPolicyPageTemplate = ({ title, body }) => (
  <ContentWrapper>
    <PageHeading>{title}</PageHeading>
    <MarkdownContainer>
      <Markdown source={body} renderers={markdownRenderers} />
    </MarkdownContainer>
    <StyledLink to="/">← back to homepage</StyledLink>
  </ContentWrapper>
)

export default class PrivacyPolicyPage extends React.Component {
  render() {
    const {
      data: {
        pageData: { rawMarkdownBody, frontmatter: pageData },
      },
    } = this.props
    const { title } = pageData

    return <PrivacyPolicyPageTemplate title={title} body={rawMarkdownBody} />
  }
}

export const pageQuery = graphql`
  query {
    pageData: markdownRemark(frontmatter: { templateKey: { eq: "privacy-policy-page" } }) {
      rawMarkdownBody
      frontmatter {
        title
      }
    }
  }
`
