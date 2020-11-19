import React from "react"
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"
import CustomButton from '../components/CustomButton'
import CustomInput from '../components/CustomInput'
import PrimaryTitle from '../components/PrimaryTitle'
import processData from '../data/process';

import GatsbyIcon from '../brand/gatsby.svg'
import RTIcon from '../brand/rct.svg'
import NodeIcon from '../brand/node-dot-js.svg'
import MongoIcon from '../brand/mongodb.svg'
import AWSIcon from '../brand/amazonaws.svg'
import LightHouseIcon from '../brand/lighthouse.svg'
import PostgreIcon from '../brand/postgresql.svg'

const ServicesSection = styled.div`
width: 100%;
min-height: 600px;
margin-top: 100px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const ServiceContainer = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 120px;
`

const ServiceCardContainer = styled.div`
width: 40%;
padding: 20px;
height: fit-content;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
box-shadow: 4px 4px 4px rgba(0,0,0,0.25);
border-radius: 7px;
background-color: white;
margin-left: ${props=> props.index%2===0? "-30%": "-10%"};
z-index: 1;
`

const ServiceCardTitle = styled.div`
font-weight: 500;
font-size: 24px;
line-height: 36px;
color: #3182ce;
`

const ServiceCardDescription = styled.div`
margin-top: 10px;
`

const ButtonContainer = styled.div`
margin: 80px auto 0px auto;
width: fit-content;
`

const ProcessSection = styled.div`
margin-top: 120px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const StepContainer = styled.div`
margin-top: 100px;
`

const StepHeader = styled.div`
display: flex;
justify-content:left;
align-items: center;
`

const StepTitle = styled.div`
font-size: 28px;
font-weight: 600;
text-align: center;
`

const StepIcon = styled.div`
width: 40px;
height: 40px;
margin: 0 15px;
`

const StepDescription = styled.div`
width: 300px;
padding: 15px 20px;
`

const EmailSection = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 100px;
`

const EmailSuperTitle = styled.div`
margin-top: 50px;
font-size: 16px;
font-weight: 600;
`

const EmailInput = styled.div`
display:flex;
margin-top: 20px;
`

const EmailSubTitle = styled.div`
font-weight: 600;
font-size: 12px;
line-height: 16px;
text-align: center;
margin-top: 10px;
`

const BrandSection = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin-top: 100px;
`

const BrandContainer = styled.div`
margin-top: 40px;
& svg {
  fill: #343434;
  width: 40px;
  height: 40px;
  margin: 0 10px;
  opacity: 0.8;
}
`


const ServicesPage = ({ location }) => {
  const data = useStaticQuery(graphql`
  query {
    allServicesJson {
      nodes {
        title
        description
        image
      }
    }
  }
`)
  return (
    <Layout location={location}>
      <SEO title="Services" />
      <ServicesSection>
        {
          data.allServicesJson.nodes.map((node, idx) => {
            return (
              <ServiceContainer key={idx} >
                <Image filename={node.image} wrapperStyle={{ width: "50%", borderRadius: 25, transform: idx%2 ===0? "translateX(-20%)": "translateX(20%)" }} imgStyle={{ opacity: 0.8 }} />
                <ServiceCardContainer index={idx}>
                  <ServiceCardTitle>{node.title}</ServiceCardTitle>
                  <ServiceCardDescription>{node.description}</ServiceCardDescription>
                </ServiceCardContainer>
              </ServiceContainer>
            )
          })
        }
      </ServicesSection>

      <ButtonContainer>
        <CustomButton>Get Started</CustomButton>
      </ButtonContainer>

      <ProcessSection>
        <PrimaryTitle>The Process</PrimaryTitle>
        {
          processData.map((node, idx) => {
            return (
              <StepContainer key={idx}>
                <StepHeader>
                  <StepIcon>{node.icon}</StepIcon>
                  <StepTitle>{node.title}</StepTitle>
                </StepHeader>
                <StepDescription>{node.description}</StepDescription>
              </StepContainer>
            )
          })
        }
      </ProcessSection>
      <EmailSection>
        <PrimaryTitle>Interested In Our Work?</PrimaryTitle>
        <EmailSuperTitle>Don’t miss out on latest newsletter on development trend</EmailSuperTitle>
        <EmailInput>
          <CustomInput placeholder="Email" type="email" style={{marginRight: 20}}/>
          <CustomButton inverted style={{padding: "10px 20px", fontSize: 20}}>Subscribe</CustomButton>
        </EmailInput>
        <EmailSubTitle>Never Spam, Unsubscribe anytime</EmailSubTitle>
      </EmailSection>
      <BrandSection>
        <PrimaryTitle style={{fontSize: 30}}>Powered by</PrimaryTitle>
        <BrandContainer>
          <GatsbyIcon />
          <RTIcon />
          <NodeIcon />
          <MongoIcon />
          <AWSIcon />
          <LightHouseIcon />
          <PostgreIcon />
        </BrandContainer>
      </BrandSection>
    </Layout>
  )
}

export default ServicesPage