import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import Image from "../components/image"
import screenSizes from "../data/screenSizes"

const BlogContainer = styled.div`
  margin-top: 32px;
  padding: 16px;
`

const BlogCoverContainer = styled.div`
  position: relative;
  height: 300px;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  color: white;
  border-radius: 7px;

  @media only screen and (max-width: ${screenSizes.sm}) {
    height: 220px;
  }
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.6);
`

const MetaContainer = styled.div`
  padding: 16px;
  min-height: 50%;
  z-index: 2;
`

const MetaTitle = styled.div`
  font-size: 32px;
  font-weight: 600;
  line-height: 1.5;

  @media only screen and (max-width: ${screenSizes.sm}) {
    font-size: 22px;
  }
`

const MetaDescription = styled.div`
  color: #bdbdbd;
  font-size: 14px;
`

const ContentContainer = styled.div`
  margin-top: 64px;
`

const BlogTemplate = ({ cover, title, author, date, body }) => {
  return (
    <BlogContainer>
      <BlogCoverContainer>
        <Image
          filename={cover.replace("/img/", "")}
          wrapperStyle={{
            height: "100%",
            width: "100%",
            position: "absolute",
            zIndex: "-1",
          }}
        />
        <Overlay />
        <MetaContainer>
          <MetaTitle>{title}</MetaTitle>
          <MetaDescription>{author}</MetaDescription>
          <MetaDescription>{date}</MetaDescription>
        </MetaContainer>
      </BlogCoverContainer>

      <ContentContainer dangerouslySetInnerHTML={{ __html: body }} />
    </BlogContainer>
  )
}

const Blog = ({ data, location }) => {
  return (
    <Layout location={location}>
      <BlogTemplate
        {...data.markdownRemark.frontmatter}
        body={data.markdownRemark.html}
      />
    </Layout>
  )
}

export default Blog

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      frontmatter {
        title
        cover
        date(formatString: "MMMM DD, YYYY")
        author
      }
      fields {
        slug
      }
    }
  }
`
