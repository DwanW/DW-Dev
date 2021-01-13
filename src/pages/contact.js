import React, { useState } from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CustomInput from "../components/CustomInput"
import CustomButton from "../components/CustomButton"
import CustomInputArea from "../components/CustomInputArea"
import screenSizes from "../data/screenSizes"

import FaceBookIcon from "../icons/facebook.svg"
import InstagramIcon from "../icons/instagram.svg"
import LinkedInIcon from "../icons/linkedin.svg"
import TwitterIcon from "../icons/twitter.svg"

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

  @media only screen and (max-width: ${screenSizes.md}) {
    margin: 20px 20px;
  }
`

const QuestionContainer = styled.div`
  color: #343434;
  font-size: 22px;
  font-weight: 600;
  line-height: 28px;
`

const AnswerContainer = styled.div`
  margin: 5px 0;
`

const ContactSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

const MediaLinkContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
`

const LinkContainer = styled.div`
  width: 40px;
  height: 40px;
  margin: 0 20px;
`

const FormSection = styled.div`
  margin-top: 40px;
`

const FormContainer = styled.form`
  margin: 20px 20px;
`

const RowContainer = styled.div`
  display: flex;
  width: 100%;

  & > div {
    margin-right: 20px;
  }

  @media only screen and (max-width: ${screenSizes.md}) {
    flex-direction: column;
    height: 100px;
    justify-content: space-between;

    & > div {
      margin-right: 0px;
    }
  }
`

const ContactPage = ({ location }) => {
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

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [feedbackMsg, setFeedbackMsg] = useState(null)
  const [status, setStatus] = useState(null)

  const isEmailValid = email => {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
  }

  const handleSubmit = async e => {
    e.preventDefault()

    const url = "https://re0lsxsv67.execute-api.us-east-1.amazonaws.com/initial"
    const opts = {
      method: "POST",
      body: JSON.stringify({ name, email, message }),
    }

    if (name && isEmailValid(email) && message) {
      fetch(url, opts)
        .then(() => {
          setName("")
          setEmail("")
          setMessage("")
          setStatus("success")
          setFeedbackMsg("Message Received. Thank you!")
        })
        .catch(() => setFeedbackMsg("Error, Please Try Again!"))
    } else {
      setName("")
      setEmail("")
      setMessage("")
      setStatus("error")
      setFeedbackMsg("Error, Please Try Again!")
    }
  }

  return (
    <Layout location={location}>
      <SEO title="Contact" />
      <FAQSection>
        <ContactSectionTitle>Have any questions?</ContactSectionTitle>
        {data.allFaqJson.nodes.map((node, idx) => {
          return (
            <FAQItem key={idx}>
              <QuestionContainer>{node.question}</QuestionContainer>
              <AnswerContainer>{node.answer}</AnswerContainer>
            </FAQItem>
          )
        })}
      </FAQSection>

      <ContactSection>
        <ContactSectionTitle>Contact Us</ContactSectionTitle>
        <ContactCard>
          <ContactTarget>General Contact</ContactTarget>
          <ContactAddress>dwanwangdev@gmail.com</ContactAddress>
        </ContactCard>
        <MediaLinkContainer>
          <LinkContainer>
            <a
              href="https://www.facebook.com/dwan.wang.585"
              target="_blank"
              aria-label="facebook"
              rel="noreferrer"
            >
              <FaceBookIcon fill="#3182CE" />
            </a>
          </LinkContainer>
          <LinkContainer>
            <a
              href="https://www.instagram.com/dwinteractivedev/"
              target="_blank"
              aria-label="instagram"
              rel="noreferrer"
            >
              <InstagramIcon fill="#3182CE" />
            </a>
          </LinkContainer>
          <LinkContainer>
            <a
              href="http://www.linkedin.com/company/dw-interactive-dev"
              target="_blank"
              aria-label="linkedin"
              rel="noreferrer"
            >
              <LinkedInIcon fill="#3182CE" />
            </a>
          </LinkContainer>
          <LinkContainer>
            <a
              href="https://twitter.com/Dwan87734256"
              target="_blank"
              aria-label="twitter"
              rel="noreferrer"
            >
              <TwitterIcon fill="#3182CE" />
            </a>
          </LinkContainer>
        </MediaLinkContainer>
      </ContactSection>

      <FormSection>
        <ContactSectionTitle>Send us a Message</ContactSectionTitle>
        <FormContainer onSubmit={handleSubmit}>
          <RowContainer>
            <CustomInput
              placeholder="Email"
              type="email"
              style={{ flexGrow: 1 }}
              onChange={e => setEmail(e.target.value)}
              value={email}
            />
            <CustomInput
              placeholder="Name"
              type="text"
              style={{ flexGrow: 1 }}
              onChange={e => setName(e.target.value)}
              value={name}
            />
          </RowContainer>
          <CustomInputArea
            placeholder="Message"
            type="text"
            style={{ flexGrow: 1, width: "100%", height: "150px" }}
            onChange={e => setMessage(e.target.value)}
            value={message}
            message={feedbackMsg}
            show={status !== null}
            success={status === "success"}
          />
          <CustomButton
            inverted
            type="submit"
            style={{ padding: "5px 40px", fontSize: 20, marginTop: 30 }}
            aria-label="submit-form"
          >
            Submit
          </CustomButton>
        </FormContainer>
      </FormSection>
    </Layout>
  )
}

export default ContactPage
