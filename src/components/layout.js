import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import { GlobalStyle } from "./layout.styles"
import screenSizes from '../data/screenSizes'

import styled from 'styled-components'

const LayoutContainer = styled.div`
overflow: hidden;
min-height: 100vh;
display: flex;
flex-direction:column;
justify-content: space-between;
`

const MainBody = styled.main`
margin: 0 auto;
max-width: 960px;
padding: 0 1.0875rem 1.45rem;

@media only screen and (max-width: ${screenSizes.md}){
  padding: 0;
  margin: 0;
}

`

const Layout = ({ children, location }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <LayoutContainer>
      <GlobalStyle />
      <Header
        siteTitle={data.site.siteMetadata?.title || `Title`}
        location={location}
      />
      <MainBody>{children}</MainBody>
      <Footer />
    </LayoutContainer>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
