import React from "react"
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import CustomInput from "../components/CustomInput"
import CustomButton from "../components/CustomButton"

const FAQSection = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const ContactSectionTitle = styled.div`
color: #3182ce;
font-size: 24px;
font-weight: 600;
margin: 20px auto;
text-align: center;
`

const FAQItem = styled.div`
margin: 20px 0;
`

const QuestionContainer = styled.div`
color: #343434;
font-size: 22px;
font-weight: 600;
`

const AnswerContainer = styled.div`
margin: 5px 0;
`

const ContactSection = styled.div`
display: flex;
flex-direction: column;
align-items:center;
`

const ContactCard = styled.div`
width: 300px;
`

const ContactTarget = styled.div`
text-align: center;
`

const ContactAddress = styled.div`
text-align: center;
`

const FormSection = styled.div`
margin-top: 40px;
`

const FormContainer = styled.div`
`

const RowContainer = styled.div`
display: flex;
width: 100%;
`

const CustomTextArea = styled.textarea`
background: #FFFFFF;
border-radius: 6px;
padding: 5px 10px;
border: none;
transition: all 0.3s;
font-weight: 600;
font-size: 20px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
color: #343434;
margin-top: 15px;
resize: none;

&::placeholder {
font-weight: 600;
font-size: 20px; 
color: #343434;
opacity: 0.4;
}
&:active {
  outline: none;
}
&:focus {
  outline: none;
}
`

const ContactPage = ({location}) => {
  const data = useStaticQuery(graphql`
  query {
    allFaqJson {
      nodes {
        question
        answer
      }
    }
  }
  `)

  return(
  <Layout location={location}>
    <SEO title="Contact" />
    <FAQSection>
      <ContactSectionTitle>Have any questions?</ContactSectionTitle>
      {
        data.allFaqJson.nodes.map((node, idx) => {
          return (
            <FAQItem key={idx}>
              <QuestionContainer>{node.question}</QuestionContainer>
              <AnswerContainer>{node.answer}</AnswerContainer>
            </FAQItem>
          )
        })
      }
    </FAQSection>

    <ContactSection>
      <ContactSectionTitle>Contact Us</ContactSectionTitle>
      <ContactCard>
        <ContactTarget>General Contact</ContactTarget>
        <ContactAddress>info@DWdev.com</ContactAddress>
      </ContactCard>
    </ContactSection>

    <FormSection>
      <ContactSectionTitle>Send us a Message</ContactSectionTitle>
      <FormContainer>
        <RowContainer>       
          <CustomInput placeholder="Email" type="email" style={{ flexGrow: 1, marginRight: 20}}/>
          <CustomInput placeholder="Name" type="text" style={{ flexGrow: 1}}/>
        </RowContainer>
        <CustomTextArea placeholder="Message" type="text" style={{ flexGrow: 1, width: "100%", height: "150px"}}/>
        <CustomButton inverted style={{padding: "5px 40px", fontSize: 20}}>Submit</CustomButton>
      </FormContainer> 
    </FormSection>
  </Layout>
)}

export default ContactPage