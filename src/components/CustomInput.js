import React from "react"
import styled from 'styled-components'

const PrimaryInput = styled.input`
display: flex;
justify-content: center;
align-items: center;
background: #FFFFFF;
border-radius: 6px;
padding: 5px 10px;
border: none;
transition: all 0.3s;
font-weight: 600;
font-size: 20px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
color: #343434;

&::placeholder {
font-weight: 600;
font-size: 20px; 
color: #343434;
opacity: 0.4;
}
&:active {
  outline: none;
}
&:focus {
  outline: none;
}
`

const CustomInput = ({ children, inverted, placeholder, ...otherProps }) => (
  <PrimaryInput inverted={inverted} placeholder={placeholder} {...otherProps}>{children}</PrimaryInput>
)

export default CustomInput