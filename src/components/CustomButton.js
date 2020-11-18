import React from "react"
import styled from 'styled-components'

const PrimaryButton = styled.button`
display: flex;
justify-content: center;
align-items: center;
background: white;
color: #3182CE;
padding: 15px 30px;
border: 1px solid rgba(49, 130, 206, 0.3);
transition: all 0.3s;
font-weight: 600;
font-size: 28px;
box-shadow: 0px 4px 4px #3182CE;
cursor: pointer;

&:hover {
color: white;
background-color: #3182CE;
}
&:active {
  outline: none;
  box-shadow: 1px 4px 4px #343434 inset;
}
&:focus {
  outline: none;
}
`

const CustomButton = ({children, ...otherProps}) => (
    <PrimaryButton {...otherProps}>{children}</PrimaryButton>
)

export default CustomButton