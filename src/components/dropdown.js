import React, { useState } from "react"
import styled, { keyframes } from "styled-components"
import { Link } from "gatsby"

const fadeDown = keyframes`
0% { transform: translateY(-50px); opacity: 0;}
100% { transform: translateY(0px); opacity: 1; }
`

const DropDownContainer = styled.div`
  position: relative;

  & .top {
    transform: translateY(13px) rotate(45deg);
  }
  & .mid {
    opacity: 0;
  }
  & .bot {
    transform: translateY(-13px) rotate(-45deg);
  }
  & .show {
    opacity: 1;
  }
`

const DropdownIconContainer = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;
`

const MenuBar = styled.div`
  width: 70%;
  border: 1px solid #3182ce;
  transition: 0.4s;
`

const DropDownList = styled.div`
  position: absolute;
  background: radial-gradient(
    circle at bottom,
    #3182ce,
    #3182ce 50%,
    #3182ce 65%,
    #8893df 100%
  );
  padding: 20px;
  transition: 0.4;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 150%;
  right: 0;
  width: 94vw;
  z-index: 2;
  color: #ffffff;
  font-size: 28px;
  line-height: 40px;
  animation: ${fadeDown} ease-in-out 0.3s 1 forwards;
`

const DropDown = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <DropDownContainer className={className}>
      <DropdownIconContainer onClick={toggleMenu}>
        <MenuBar className={isOpen ? "top" : ""} />
        <MenuBar className={isOpen ? "mid" : ""} />
        <MenuBar className={isOpen ? "bot" : ""} />
      </DropdownIconContainer>
      {isOpen ? (
        <DropDownList>
          <Link to="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/services" onClick={() => setIsOpen(false)}>
            Services
          </Link>
          <Link to="/blog" onClick={() => setIsOpen(false)}>
            Blog
          </Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </DropDownList>
      ) : null}
    </DropDownContainer>
  )
}

export default DropDown
