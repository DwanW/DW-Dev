import React, { useState } from "react"
import styled, { keyframes } from 'styled-components'

const DropDownContainer = styled.div`
position: relative;

& .top {
    transform: translateY(13px) rotate(45deg)
}
& .mid {
    opacity: 0;
}
& .bot {
    transform: translateY(-13px) rotate(-45deg)
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
opacity: 1;
transition: 0.4;
display: flex;
flex-direction: column;
top: 100%;
right: 0;
`

const DropDown = ({children, className}) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }


    return (
        <DropDownContainer className={className}>
            <DropdownIconContainer onClick={toggleMenu}>
                <MenuBar className={isOpen? "top": ""}/>
                <MenuBar className={isOpen? "mid": ""}/>
                <MenuBar className={isOpen? "bot": ""}/>
            </DropdownIconContainer>
            { isOpen? <DropDownList >
                {children}
            </DropDownList> : null }
        </DropDownContainer>
    )
}

export default DropDown