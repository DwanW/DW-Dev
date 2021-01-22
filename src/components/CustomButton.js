import React from "react"
import styled from "styled-components"
import theme from '../assets/theme'

const PrimaryButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => (props.inverted ? theme.accentOrange : theme.primaryWhite)};
  color: ${props => (props.inverted ? theme.primaryWhite : theme.accentOrange)};
  padding: 12px 20px;
  border: 1px solid rgba(49, 130, 206, 0.3);
  transition: all 0.3s;
  font-weight: 600;
  font-size: 20px;
  box-shadow: 0px 4px 4px ${theme.accentOrange};
  cursor: pointer;

  &:hover {
    color: ${props => (props.inverted ? theme.accentOrange : theme.primaryWhite)};
    background-color: ${props => (props.inverted ? theme.primaryWhite : theme.accentOrange)};
  }
  &:active {
    outline: none;
    box-shadow: 1px 4px 4px #343434 inset;
  }
  &:focus {
    outline: none;
  }
`

const CustomButton = ({ children, inverted, ...otherProps }) => (
  <PrimaryButton inverted={inverted} {...otherProps}>
    {children}
  </PrimaryButton>
)

export default CustomButton
