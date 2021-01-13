import React from "react"
import styled, { keyframes } from "styled-components"
import CheckIcon from "../icons/check-mark.svg"
import WarnIcon from "../icons/warning.svg"

const fadeIn = keyframes`
0%{opacity: 0}
20%{opacity: 1}
100%{opacity: 1}
`

const PrimaryInputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

const PrimaryInput = styled.input`
  background: #ffffff;
  border-radius: 6px;
  padding: 10px 10px;
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

const InputFeedback = styled.div`
  position: absolute;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  top: 100%;
  padding: 5px 10px;
  font-size: 14px;
  opacity: 0;
  font-weight: 600;
  animation: ${fadeIn} 3s forwards 1 ease-in-out;
`

const CustomInput = ({
  children,
  inverted,
  placeholder,
  message,
  show = false,
  success,
  ...otherProps
}) => (
  <PrimaryInputWrapper>
    <PrimaryInput inverted={inverted} placeholder={placeholder} {...otherProps}>
      {children}
    </PrimaryInput>
    {show ? (
      <InputFeedback>
        {success ? (
          <CheckIcon width="20px" fill="#32CD32" style={{ marginRight: 10 }} />
        ) : (
          <WarnIcon width="20px" fill="red" style={{ marginRight: 10 }} />
        )}
        {message}
      </InputFeedback>
    ) : null}
  </PrimaryInputWrapper>
)

export default CustomInput
