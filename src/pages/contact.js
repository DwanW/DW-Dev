import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = ({location}) => (
  <Layout location={location}>
    <SEO title="Contact" />
    <h1>Contact Page</h1>
    <Link to="/">Go back to the cover</Link>
  </Layout>
)

export default ContactPage