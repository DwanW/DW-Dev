import React from "react"
import styled from 'styled-components'

const PrimaryTitleContainer = styled.div`
color: #3182ce;
font-weight: 600;
font-size: 48px;
`

const PrimaryTitle = ({children, ...otherProps}) => (
    <PrimaryTitleContainer {...otherProps}>{children}</PrimaryTitleContainer>
)

export default PrimaryTitle;