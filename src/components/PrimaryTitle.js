import React from "react"
import styled from "styled-components"
import screenSizes from "../data/screenSizes"
import theme from '../assets/theme'

const PrimaryTitleContainer = styled.div`
  color: ${theme.uiBlack};
  font-weight: 600;
  font-size: 40px;
  text-align: center;
  padding: 0 10px;
  line-height: 40px;

  @media only screen and (max-width: ${screenSizes.md}) {
    font-size: 32px;
  }
`

const PrimaryTitle = ({ children, ...otherProps }) => (
  <PrimaryTitleContainer {...otherProps}>{children}</PrimaryTitleContainer>
)

export default PrimaryTitle
