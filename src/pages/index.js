import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Cover" />
    <Link to="/home">Home</Link>
    <Link to="/services">Services</Link>
    <Link to="/about">About</Link>
    <Link to="/contact">Contact</Link>
    <h1>DW Interactive Dev</h1>
    <Image filename={'pwa'}/>
  </Layout>
)

export default IndexPage
