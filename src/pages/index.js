import React, { useState } from "react"
import { useStaticQuery, Link } from "gatsby"
import Image from "../components/image"
import SEO from "../components/seo"

import PlayButton from '../icons/play-button-arrowhead.svg'
import styled, { keyframes } from 'styled-components'
import { GlobalStyle } from "../components/layout.styles"

const floatUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(0px);
  }
  5% {
    opacity: 0.22;
    transform: translateY(-10px);
  }
  95% {
    opacity: 0.22;
    transform: translateY(-190px);
  }
  100% {
    opacity: 0;
    transform: translateY(-200px);
  }
`

const expandWave = keyframes`
 0% {
   opacity: 1;
   width: 0;
   height: 0;
 }
 100% {
  opacity: 0;
  width: 1000px;
  height: 1000px;
 }
`

const fadeInSkew = (translateX, skew ) => keyframes`
  0% {
    opacity: 0;
    transform: translateX(${translateX}px);
  }
  100% {
    opacity: 1;
    transform: translateX(0px) skew(${skew}deg);
  }
`

const verticalExpand = keyframes`
  0%{ margin: 0 0}
  100% {margin: 25px 0}
`
const CoverPage = styled.div`
  margin: 0;
  padding: 0;
  height: 100vh;
  position: relative;
  overflow:hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ImageBGContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 1;
  animation: ${floatUp} 20s infinite linear 0s both;
  pointer-events: none;
`

const CentralContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ButtonContainer = styled.button`
width: 50px;
height: 50px;
border: none;
background-color: transparent;
transition: width 0.2s;
opacity: 0.8;
margin-bottom: 10px;
cursor: pointer;

&:hover {
  width: 60px;
  height: 60px;
  margin-bottom: 0px;
}
&:active {
  outline: none;
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
}
&:focus {
  outline: none;
}
`
const TitleContainer = styled.div`
font-size: 24px;
margin-top: 20px;
z-index: 1;
pointer-events: none;
text-align: center;
`

const NavigationContainer = styled.div`
display: ${props => props.active ? "flex":"none"};
position: relative;
height: 300px;
width: 200px;
margin: 0 20px;
flex-direction:column;
justify-content:center;
transform:translateY(-30px);
`

const TiltUpperLeftLine = styled.div`
height: 30px;
width: 100%;
border-left: 3px solid #3182ce;
border-bottom: 3px solid #3182ce;
animation: ${props => fadeInSkew(props.translateX, props.skew)} 0.5s ease-out 1 forwards;
`

const TiltUpperRightLine = styled.div`
height: 30px;
width: 100%;
border-right: 3px solid #3182ce;
border-bottom: 3px solid #3182ce;
animation: ${props => fadeInSkew(props.translateX, props.skew)} 0.5s ease-out 1 forwards;
`

const TiltBottomRightLine = styled.div`
height: 30px;
width: 100%;
border-right: 3px solid #3182ce;
border-top: 3px solid #3182ce;
animation: ${props => fadeInSkew(props.translateX, props.skew)} 0.5s ease-out 1 forwards;
`

const TiltBottomLeftLine = styled.div`
height: 30px;
width: 100%;
border-left: 3px solid #3182ce;
border-top: 3px solid #3182ce;
animation: ${props => fadeInSkew(props.translateX, props.skew)} 0.5s ease-out 1 forwards;
`

const BackgroundWave = styled.div`
width: 0px;
height: 0px;
position: absolute;
background-color: #3182ce;
border-radius: 50%;
transform: translateY(-20px);
animation-name: ${props => props.active ? expandWave: ""};
animation-duration: 1s;
animation-iteration-count: 1;
animation-timing-function: ease-out;
`

const SeparateBox = styled.div`
width: 100%;
height: 0;
margin: 0 0;
animation: ${verticalExpand} 0.5s ease-out 1 0.5s forwards;
`


const IndexPage = () => {
  const [enableWave, setEnableWave] = useState(false);
  const [enableBranch, setEnableBranch] = useState(false);

  return (
    <CoverPage>
      <GlobalStyle />
      <SEO title="Cover" />
      <ImageBGContainer>
        <Image filename={'ascend'} />
      </ImageBGContainer>
      <BackgroundWave active={enableWave} onAnimationEnd={() => setEnableWave(false)}/>

      <NavigationContainer active={enableBranch}>
        <Link to="/home" >Home</Link>
        <TiltUpperLeftLine translateX={100} skew={35} />
        <SeparateBox />
        <TiltBottomLeftLine translateX={100} skew={-35} />
        <Link to="/about">About</Link>
      </NavigationContainer>

      <CentralContainer>
        <ButtonContainer onClick={() => {
          setEnableWave(true);
          setEnableBranch(true)
          }}>
          <PlayButton />
        </ButtonContainer>

        <TitleContainer>
          DW Interactive Dev
      </TitleContainer>
      </CentralContainer>

      <NavigationContainer active={enableBranch}>
        <Link to="/services" style={{ textAlign: "right" }}>Services</Link>
        <TiltUpperRightLine translateX={-100} skew={-35} />
        <SeparateBox />
        <TiltBottomRightLine translateX={-100} skew={35} />
        <Link to="/contact" style={{ textAlign: "right" }}>Contact</Link>
      </NavigationContainer>
    </CoverPage>
  )
}

export default IndexPage
