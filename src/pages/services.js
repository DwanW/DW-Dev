import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ServicesPage = () => (
  <Layout>
    <SEO title="Services" />
    <h1>Hi from the Service page</h1>
    <Link to="/">Go back to the Cover</Link>
  </Layout>
)

export default ServicesPage