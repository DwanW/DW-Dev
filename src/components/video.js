import React from "react"
import { withPrefix } from "gatsby"
import styled from "styled-components"

const CustomVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
  object-fit: cover;
  object-position: center;
`

export default ({ src }) => {
  return (
    <CustomVideo autoPlay muted loop src={withPrefix(src)}>
      <source src={withPrefix(src)} type="video/mp4" />
      Your device does not support playing 'video/mp4' videos
    </CustomVideo>
  )
}
