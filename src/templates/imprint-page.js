import React from 'react'
import styled from 'styled-components'
import { graphql, Link } from 'gatsby'
import Markdown from 'react-markdown'
import HideOnMobile from 'components/HideOnMobile'
import ContentWrapper from 'components/ContentWrapper'
import MobilePageHeading from 'components/MobilePageHeading'
import MdRenderers from 'markdownRenderers'
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

const MarkdownContainer = styled.div`
  font-size: 14px;

  @media screen and (max-width: 767px) {
    font-size: 8px;
  }
`

export const ImprintPageTemplate = ({ title, body }) => (
  <PageWrapper>
    <ContentWrapper>
      <PageHeading>{title}</PageHeading>
      <MobilePageHeading text={title} />
      <MarkdownContainer>
        <Markdown source={body} renderers={MdRenderers} />
      </MarkdownContainer>
      <StyledLink to="/">
        &lt;- <HideOnMobile>back to homepage</HideOnMobile>
      </StyledLink>
    </ContentWrapper>
  </PageWrapper>
)

const ImprintPage = props => {
  const {
    data: {
      pageData: { rawMarkdownBody, frontmatter: pageData },
    },
  } = props
  const { title } = pageData

  return <ImprintPageTemplate title={title} body={rawMarkdownBody} />
}

export default ImprintPage

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
