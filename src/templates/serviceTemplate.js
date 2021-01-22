import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import Image from "../components/image"
import screenSizes from "../data/screenSizes"
import CustomButton from "../components/CustomButton"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import theme from '../assets/theme'
import { motion } from 'framer-motion'

const OnboardingContainer = styled.div`
display: flex;
margin-top: 50px;
justify-content: center;
align-items: center;

@media only screen and (max-width: ${screenSizes.md}) {
      flex-direction: column;
    }
`
const OnboardImg = styled.div`
min-width: 55%;
border-radius: 7px;
overflow: hidden;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

@media only screen and (max-width: ${screenSizes.md}) {
    min-width: 80%;
    }
`
const OnboardDetail = styled.div`
padding: 20px 0 20px 20px;
display: flex;
flex-direction: column;

@media only screen and (max-width: ${screenSizes.md}) {
    max-width: 80%;
    padding: 20px;
    }

@media only screen and (max-width: ${screenSizes.sm}) {
    max-width: 90%;
    }
`
const KeyTitle = styled.div`
letter-spacing: 2px;
font-weight: 600;
font-size: 14px;
padding: 16px 0;
`

const OnboardTitle = styled.div`
font-size: 32px;
line-height: 1.1;
margin-bottom: 16px;
font-weight: 600;
color: ${theme.primaryBlueDark};

@media only screen and (max-width: ${screenSizes.sm}) {
    font-size: 20px;
    }
`

const OnboardDescription = styled.div`
font-size: 16px;
margin-bottom: 16px;
`
const SectionHeader = styled.div`
margin-top: 64px;
text-align: center;
`
const SectionHead = styled.div`
font-size: 28px;
line-height: 1.1;
margin-bottom: 16px;
font-weight: 600;
color: ${theme.primaryBlueDark};

@media only screen and (max-width: ${screenSizes.sm}) {
    font-size: 20px;
    }
`
const SectionContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: 1fr 1fr;
grid-gap: 32px;
background-color: ${theme.uiGrayLight};
padding: 32px;
border-radius: 10px;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

@media only screen and (max-width: ${screenSizes.sm}) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-gap: 32px;
    }
`
const CardContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const CardImg = styled.div`
min-width:100%;
`
const Card = styled.div`
display: flex;
flex-direction: column;
`
const CardTitle = styled.div`
font-size: 24px;
font-weight: 600;
margin: 16px 0 12px 0;
`
const CardDescription = styled.div`
margin-bottom: 24px;
`
const ButtonContainer = styled.div`
display: flex;
justify-content: center;
`
const MidSectionText = styled.div`
text-align: center;
font-size: 20px;
margin: 32px 0 24px 0;
color: ${theme.uiBlack};
`

const Service = ({ data, location }) => {
    const serviceData = data.markdownRemark.frontmatter
    const {
        title,
        onboardTitle,
        onboardDescription,
        onboardImg,
        blogLink,
        benefits,
        workflow,
        otherServiceTitle,
        otherServiceLink,
        otherServiceDescription
    } = serviceData

    return (
        <Layout location={location}>
            <OnboardingContainer>
                <OnboardImg>
                    <Image filename={onboardImg.replace("/img/", "")} />
                </OnboardImg>
                <OnboardDetail>
                    <KeyTitle>{title.toUpperCase()}</KeyTitle>
                    <OnboardTitle>{onboardTitle}</OnboardTitle>
                    <OnboardDescription>{onboardDescription}</OnboardDescription>
                    <AniLink fade duration={0.4} to="/contact" className="navLink">
                        <CustomButton
                            aria-label="services"
                            inverted
                            style={{ width: "100%" }}
                        >Get Started</CustomButton>
                    </AniLink>
                </OnboardDetail>
            </OnboardingContainer>
            <SectionHeader>
                <KeyTitle>Benefits</KeyTitle>
                <SectionHead>How our blog site is different</SectionHead>
            </SectionHeader>
            <SectionContainer>
                {
                    benefits.map((obj, idx) => (
                        <CardContainer key={idx}>
                            <CardImg>
                                <Image filename={obj.benefitImg.replace("/img/", "")} />
                            </CardImg>
                            <Card>
                                <CardTitle>{obj.benefitTitle}</CardTitle>
                                <CardDescription>{obj.benefitDescription}</CardDescription>
                            </Card>
                        </CardContainer>
                    ))
                }
            </SectionContainer>

            <MidSectionText>Ready To Get Started?</MidSectionText>
            <ButtonContainer>
                <AniLink fade duration={0.4} to="/contact" className="navLink">
                    <CustomButton aria-label="services" inverted>Let's Talk</CustomButton>
                </AniLink>
            </ButtonContainer>

            <SectionHeader>
                <KeyTitle>Workflow</KeyTitle>
                <SectionHead>How it works</SectionHead>
            </SectionHeader>

            <SectionContainer>
                {
                    workflow.map((obj, idx) => (
                        <CardContainer key={idx}>
                            <CardImg>
                                <Image filename={obj.stepImg.replace("/img/", "")} />
                            </CardImg>
                            <Card>
                                <CardTitle>{obj.stepTitle}</CardTitle>
                                <CardDescription>{obj.stepDescription}</CardDescription>
                            </Card>
                        </CardContainer>
                    ))
                }
            </SectionContainer>

            <SectionHeader>
                <KeyTitle>Looking for other services?</KeyTitle>
                <SectionHead>{otherServiceTitle}</SectionHead>
                <MidSectionText>{otherServiceDescription}</MidSectionText>
                <ButtonContainer>
                    <AniLink fade duration={0.4} to={otherServiceLink} className="navLink">
                        <CustomButton aria-label="services" inverted>Read More</CustomButton>
                    </AniLink>
                </ButtonContainer>
            </SectionHeader>
        </Layout>
    )
}

export default Service

export const pageQuery = graphql`
  query ServiceBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        onboardTitle
        onboardDescription
        onboardImg
        blogLink
        otherServiceTitle
        otherServiceLink
        otherServiceDescription
        benefits {
            benefitTitle
            benefitDescription
            benefitImg
        }
        workflow {
            stepTitle
            stepDescription
            stepImg
        }
      }
    }
  }
`
