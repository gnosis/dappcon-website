import React from 'react'
import styled from 'styled-components'
import Markdown from 'react-markdown'
import { graphql } from 'gatsby'
import ButtonLink from 'components/ButtonLink'
import ContentWrapper from 'components/ContentWrapper'
import { colors } from 'theme'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${colors.reddishPink};
`

const SContentWrapper = styled(ContentWrapper)`
  height: 100vh;

  display: flex;
  align-items: center;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    justify-content: space-around;
  }
`

const MdContainer = styled.div`
  font-size: 49px;
  color: ${colors.white};
  font-weight: bold;
  width: 50%;

  @media screen and (max-width: 767px) {
    width: fit-content;
  }
`

const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const SButtonLink = styled(ButtonLink)`
  text-transform: uppercase;
  margin-top: 20px;

  &:first-child {
    margin-top: 0;
  }
`

export const GetInvolvedPageTemplate = ({ title, links }) => (
  <Container id="main">
    <SContentWrapper>
      <MdContainer>
        <Markdown source={title}></Markdown>
      </MdContainer>
      <LinksContainer>
        {links.map(link => (
          <SButtonLink key={link.link} href={link.link} text={link.btnTitle} hover={colors.black}></SButtonLink>
        ))}
      </LinksContainer>
    </SContentWrapper>
  </Container>
)

const GetInvolvedPage = props => {
  const {
    data: {
      pageData: { frontmatter },
    },
  } = props
  const { title, links } = frontmatter

  return <GetInvolvedPageTemplate title={title} links={links} />
}

export default GetInvolvedPage

export const pageQuery = graphql`
  query {
    pageData: markdownRemark(frontmatter: { templateKey: { eq: "podcast-page" } }) {
      frontmatter {
        title
        links {
          btnTitle
          link
        }
      }
    }
  }
`
