import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 */

const Image = ({filename, wrapperStyle, imgStyle}) => {
  const data = useStaticQuery(graphql`
    query {
      images: allFile(filter: {sourceInstanceName: {eq: "images"}}) {
        edges {
          node {
            name
            relativePath
            childImageSharp {
              fluid(maxWidth: 500){
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  const image = data.images.edges.find((edgeObj) => edgeObj.node.relativePath.includes(filename))

  if (!image) {
    return <div>image query failed</div>
  }

  return <Img fluid={image.node.childImageSharp.fluid} style={wrapperStyle} imgStyle={imgStyle}/>
}

export default Image
