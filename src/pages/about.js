import React from "react"
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from '../components/image'
import screenSizes from '../data/screenSizes'

const AboutTitle = styled.div`
font-weight: 600;
font-size: 24px;
line-height: 28px;
text-align: center;
margin-top: 50px;
`

const AboutDescription = styled.div`
width: 400px;
margin: 40px auto;

@media only screen and (max-width: ${screenSizes.sm}){
  width: 80vw;
}
`

const AboutPage = ({location}) => {
  const data = useStaticQuery(graphql`
  query {
    allAboutJson {
      nodes {
        title
        description
        image
      }
    }
  }
  `)
  return(
  <Layout location={location}>
    <SEO title="About" />
    <AboutTitle>In Short</AboutTitle>
    <AboutDescription>we are group of passionate developers who love technology and modern innovation. Our mission is to bring the most value in web development to people who needs it.</AboutDescription>
    {
      data.allAboutJson.nodes.map((node, idx) => {
        return(
          <div key={idx}>
            <Image filename={node.image} wrapperStyle={{width: 350, margin: "auto"}}/>
            <AboutTitle>{node.title}</AboutTitle>
            <AboutDescription>{node.description}</AboutDescription>
          </div>
        )
      })
    }
  </Layout>
)}

export default AboutPage