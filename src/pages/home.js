import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from 'styled-components'

const KeyFeatureSection = styled.div`

`

const HomePage = ({location}) => (
  <Layout location={location}>
    <SEO title="Home" />
    <KeyFeatureSection>

    </KeyFeatureSection>

  </Layout>
)

export default HomePage