import React from "react"
import { useImageData } from "../hooks/image"
import { GatsbyImage } from "gatsby-plugin-image"

const Image = ({ filename, wrapperStyle, imgStyle, ...otherProps }) => {
  const data = useImageData()
  const image = data.images.edges.find(edgeObj =>
    edgeObj.node.relativePath.includes(filename)
  )

  if (!image) {
    return <div>image query failed</div>
  }

  return (
    <GatsbyImage
      image={image.node.childImageSharp.gatsbyImageData}
      style={wrapperStyle}
      imgStyle={imgStyle}
      alt="image"
      {...otherProps}
    />
  )
}

export default Image
