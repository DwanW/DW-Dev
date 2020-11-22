import React from "react"
import styled from 'styled-components'
import screenSizes from '../data/screenSizes'

const PrimaryTitleContainer = styled.div`
color: #3182ce;
font-weight: 600;
font-size: 40px;
text-align: center;
padding: 0 10px;
line-height: 40px;

@media only screen and (max-width: ${screenSizes.md}){
    font-size: 32px;
}
`

const PrimaryTitle = ({children, ...otherProps}) => (
    <PrimaryTitleContainer {...otherProps}>{children}</PrimaryTitleContainer>
)

export default PrimaryTitle;