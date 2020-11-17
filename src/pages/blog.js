import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPage = ({location}) => (
  <Layout location={location}>
    <SEO title="Blog" />
    <h1>Blog Page</h1>
    <Link to="/">Go back to the cover</Link>
  </Layout>
)

export default BlogPage