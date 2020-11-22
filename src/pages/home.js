import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from 'styled-components'
import Image from "../components/image"
import CustomButton from '../components/CustomButton';
import PrimaryTitle from '../components/PrimaryTitle';
import screenSizes from '../data/screenSizes'

import ModernIllustration from '../icons/modern.svg'
import OptimizeIllustration from '../icons/optimize.svg'
import BuildIllustration from '../icons/build.svg'
import RocketIcon from '../icons/flying-rocket.svg'
import TechIcon from '../icons/tech.svg'
import ScaleIcon from '../icons/scale.svg'



const KeyFeatureSection = styled.div`

& .row-reverse {
  flex-direction: row-reverse;

  @media only screen and (max-width: ${screenSizes.lg}){
  flex-direction: column;
  }
}
`

const FeatureItem = styled.div`
display: flex;
margin-top: 100px;
justify-content: space-between;
align-items: center;

@media only screen and (max-width: ${screenSizes.lg}){
flex-direction: column;
}

& .text-right{
text-align: right;

  @media only screen and (max-width: ${screenSizes.lg}){
  text-align: left;
  }
}
`

const FeatureImageContainer = styled.div`
width: 50%; 

@media only screen and (max-width: ${screenSizes.lg}){
flex-direction: column;
}
@media only screen and (max-width: ${screenSizes.sm}){
  width: 80vw;
}
`

const FeatureDescriptionContainer = styled.div`
width: 42%; 
font-size: 30px;
font-weight: 600;
line-height: 42.23px;

& .highlight {
  color: #3182ce;
}

@media only screen and (max-width: ${screenSizes.lg}){
 font-size: 24px;
 width: 50%; 
}

@media only screen and (max-width: ${screenSizes.sm}){
  width: 80vw;
}
`

const ButtonContainer = styled.div`
margin: 80px auto 0px auto;
width: fit-content;
`

const MiddleSection = styled.div`
height: 600px;
padding: 50px 0;
`

const ImageGradientUpper = styled.div`
position: absolute;
left: 0;
height: 80px;
width: 100%;
z-index: 0;
background: linear-gradient(to top, rgba(196, 196, 196, 0) 0%, #FFFFFF 100%);
`

const ImageGradientLower = styled.div`
position: absolute;
left: 0;
transform: translateY(520px);
height: 80px;
width: 100%;
z-index: 0;
background: linear-gradient(to bottom, rgba(196, 196, 196, 0) 0%, #FFFFFF 100%);
`

const SectionTitle = styled.div`
margin: 0px auto;
margin-top: 100px;
font-weight: 500;
color: white;
display: flex;
justify-content: center;
font-size: 40px;

@media only screen and (max-width: ${screenSizes.lg}){
 font-size: 32px; 
}
`

const ElementContainer = styled.div`
margin-top: 100px;
display: flex;
justify-content: space-evenly;

@media only screen and (max-width: ${screenSizes.lg}){
 flex-direction: column;
 justify-content: center;
 margin-top: 50px;
}
`

const ElementCard = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
@media only screen and (max-width: ${screenSizes.lg}){
  flex-direction: row;
  width: 250px;
  justify-content: space-between;
  margin: 20px auto;
}
`

const ElementBox = styled.div`
height: 120px;
width: 120px;
background-color: white;
transform: rotate(-45deg);
border-radius: 14px;
box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.15);

& .straighten {
  transform: rotate(45deg) scale(0.7);
}

@media only screen and (max-width: ${screenSizes.lg}){
  height: 60px;
  width: 60px;
}
`

const ElementTitle = styled.div`
color: white;
font-size: 28px;
margin-top: 50px;

@media only screen and (max-width: ${screenSizes.lg}){
  font-size: 24px;
  margin-top: 0px;
}
`

const ValueSection = styled.div`
margin-top: 120px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const ValueContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;

@media only screen and (max-width: ${screenSizes.lg}){
  flex-direction: column;
}
`

const ValueCard = styled.div`
margin: 100px 25px 0px 25px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const ValueTitle = styled.div`
font-size: 28px;
font-weight: 300;
text-align: center;
`

const TitleBar = styled.div`
width: 120px;
margin-top: 10px;
border: 3px solid #3182ce;
background-color:#3182ce;
border-radius: 3px;
`

const ValueDescription = styled.div`
margin-top: 30px;
text-align: center;
color: #343434;

@media only screen and (max-width: ${screenSizes.lg}){
  width: 300px;
}
`

const HomePage = ({ location }) => {
  const data = useStaticQuery(graphql`
    query {
      allValuesJson {
        nodes {
          title
          description
        }
      }
    }
  `)

  return (
    <Layout location={location}>
      <SEO title="Home" />
      <KeyFeatureSection>
        <FeatureItem>
          <FeatureImageContainer>
            <ModernIllustration />
          </FeatureImageContainer>
          <FeatureDescriptionContainer>
            Build <span className="highlight">Modern</span> Website that take your business to the next level.
        </FeatureDescriptionContainer>
        </FeatureItem>

        <FeatureItem className="row-reverse">
          <FeatureImageContainer>
            <OptimizeIllustration />
          </FeatureImageContainer>
          <FeatureDescriptionContainer className="text-right">
            High quality media content with great website <span className="highlight">Performance</span>.
        </FeatureDescriptionContainer>
        </FeatureItem>

        <FeatureItem>
          <FeatureImageContainer>
            <BuildIllustration />
          </FeatureImageContainer>
          <FeatureDescriptionContainer>
            Highly <span className="highlight">Secure</span> by default, build whatever you need.
        </FeatureDescriptionContainer>
        </FeatureItem>

      </KeyFeatureSection>

      <ButtonContainer>
        <AniLink fade duration={0.4} to="/services" className="navLink" >
          <CustomButton aria-label="services">Get Started</CustomButton>
        </AniLink>
      </ButtonContainer>

      <MiddleSection>
        <ImageGradientUpper />
        <Image filename={'mid-banner'} wrapperStyle={{ backgroundColor: '#3182CE', position: "absolute", left: 0, width: "100%", height: "600px", zIndex: -1 }} imgStyle={{ opacity: 0.5 }} />
        <ImageGradientLower />
        <SectionTitle>What Set Us Apart</SectionTitle>
        <ElementContainer>
          <ElementCard>
            <ElementBox><RocketIcon className="straighten" /></ElementBox>
            <ElementTitle>FAST</ElementTitle>
          </ElementCard>
          <ElementCard>
            <ElementBox><TechIcon className="straighten" /></ElementBox>
            <ElementTitle>INTERACTIVE</ElementTitle>
          </ElementCard>
          <ElementCard>
            <ElementBox><ScaleIcon className="straighten" /></ElementBox>
            <ElementTitle>SCALABLE</ElementTitle>
          </ElementCard>
        </ElementContainer>
      </MiddleSection>

      <ValueSection>
        <PrimaryTitle>Our Value</PrimaryTitle>
        <ValueContainer>
          {
            data.allValuesJson.nodes.map((node, idx) => {
              return (
                <ValueCard key={idx}>
                  <ValueTitle>{node.title.toUpperCase()}</ValueTitle>
                  <TitleBar></TitleBar>
                  <ValueDescription>{node.description}</ValueDescription>
                </ValueCard>
              )
            })
          }
        </ValueContainer>
      </ValueSection>

      <ButtonContainer>
        <AniLink fade duration={0.4} to="/contact" className="navLink" >
          <CustomButton aria-label="contact">Let's Chat</CustomButton>
        </AniLink>
      </ButtonContainer>
    </Layout>
  )
}

export default HomePage