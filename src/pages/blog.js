import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import screenSizes from "../data/screenSizes"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"

const Title = styled.h1`
  text-align: center;
  margin-top: 48px;
`

const BlogListContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 64px 16px;
`

const BlogItemContainer = styled.div`
  display: flex;
  padding: 16px;
  width: 750px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  @media only screen and (max-width: ${screenSizes.md}) {
    width: 80%;
  }

  @media only screen and (max-width: ${screenSizes.sm}) {
    flex-direction: column;
    width: 100%;
  }
`

const BlogImageContainer = styled.div`
  width: 40%;

  @media only screen and (max-width: ${screenSizes.sm}) {
    width: 100%;
  }
`

const BlogDescriptionContainer = styled.div`
  width: 60%;
  padding: 0 16px;

  @media only screen and (max-width: ${screenSizes.sm}) {
    width: 100%;
    padding: 16px 0;
  }
`

const MetaTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 16px;
  line-height: 1.25;
`

const MetaDate = styled.div`
  font-size: 14px;
  margin-top: 16px;
  color: #616161;
`

const MetaDescription = styled.div`
  font-size: 16px;
  color: #616161;
`

const NavigationLink = styled(Link)`
  &:hover {
    text-decoration: underline;
  }
`

const BlogPage = ({ location, data }) => {
  const blogEdges = data.allMarkdownRemark.edges
  return (
    <Layout location={location}>
      <SEO title="Blog" />
      <Title>Blog</Title>
      <BlogListContainer>
        {blogEdges.map(edge => (
          <BlogItemContainer key={edge.node.id}>
            <BlogImageContainer>
              <Link to={edge.node.fields.slug}>
                <Image
                  filename={edge.node.frontmatter.cover.replace("/img/", "")}
                />
              </Link>
            </BlogImageContainer>
            <BlogDescriptionContainer>
              <Link to={edge.node.fields.slug}>
                <MetaTitle>{edge.node.frontmatter.title}</MetaTitle>
              </Link>
              <MetaDescription>
                by {edge.node.frontmatter.author}
              </MetaDescription>
              <MetaDescription>{edge.node.timeToRead} min read</MetaDescription>
              <MetaDate>{edge.node.frontmatter.date}</MetaDate>
            </BlogDescriptionContainer>
          </BlogItemContainer>
        ))}
      </BlogListContainer>
      <NavigationLink to="/"> &larr; Return to Home</NavigationLink>
    </Layout>
  )
}

export default BlogPage

export const pageQuery = graphql`
  query BlogPage {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "blogTemplate" } } }
      sort: { fields: frontmatter___date, order: DESC }
      limit: 10
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            templateKey
            date(formatString: "MMMM DD, YYYY")
            cover
            description
            title
            author
          }
          timeToRead
        }
      }
    }
  }
`
