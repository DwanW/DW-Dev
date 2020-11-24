import React, { useState, useEffect } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
// import Image from "../components/image"
import SEO from "../components/seo"
import Video from "../components/video"
// import NexusVideo from "../assets/nexus.mp4"

import PlayButton from '../icons/play-button-arrowhead.svg'
import styled, { keyframes } from 'styled-components'
import { GlobalStyle } from "../components/layout.styles"
import screenSizes from '../data/screenSizes'

// const floatUp = keyframes`
//   0% {
//     opacity: 0;
//     transform: translateY(0px);
//   }
//   5% {
//     opacity: 0.22;
//     transform: translateY(-10px);
//   }
//   95% {
//     opacity: 0.22;
//     transform: translateY(-190px);
//   }
//   100% {
//     opacity: 0;
//     transform: translateY(-200px);
//   }
// `

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

const fadeInSkew = (translateX, skew) => keyframes`
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
  background-color: rgba(0,0,0,0.0);
`

// const ImageBGContainer = styled.div`
//   position: absolute;
//   height: 100%;
//   width: 100%;
//   z-index: 1;
//   animation: ${floatUp} 20s infinite linear 0s both;
//   pointer-events: none;
// `

const CentralContainer = styled.div`
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  height: 50%;
`

const ButtonContainer = styled.button`
width: 70px;
height: 70px;
border: none;
border-radius: 50%;
padding: 10px;
background-color: transparent;
transition: all 0.2s;
opacity: 0.8;
cursor: pointer;

&:hover {
  transform: scale(1.2);
  box-shadow: 0px -1px 4px #3182CE;
}
&:active {
  outline: none;
  box-shadow: 0px 4px 4px #3182CE inset;
  border: 1px solid #3182CE;
  padding: 15px;
}
&:focus {
  outline: none;
}
`
const TitleContainer = styled.div`
font-size: 80px;
margin-bottom: 12%;
z-index: 1;
pointer-events: none;
text-align: center;
line-height: 100px;
font-size: 70px;
color: #c2c2c2;
font-family: Arial Black, Gadget, sans-serif;
text-shadow: 0px 0px 0 rgb(154,154,154),
              -1px -1px  0 rgb(114,114,114),
              -2px -2px 1px rgba(247,0,0,0.6),
              -2px -2px 1px rgba(247,0,0,0.5),
              0px 0px 1px rgba(247,0,0,.2);
background-color: #3297FD;
padding: 0 20px;
display: flex;
justify-content: center;

@media only screen and (max-width: ${screenSizes.md}){
 font-size: 20px;
}

@media only screen and (max-width: ${screenSizes.sm}){
 font-size: 16px;
}
`

const NavigationContainer = styled.div`
display: ${props => props.active ? "flex" : "none"};
position: relative;
height: 300px;
width: 200px;
margin: 0 20px;
flex-direction:column;
justify-content:center;
transform:translateY(-30px);
color: #FFFFFF;

& a {
  font-size: 40px;
  font-family: "Arial Black";
  transition: 0.3s;

  @media only screen and (max-width: ${screenSizes.md}){
  font-size: 18px;
  }
}

@media only screen and (max-width: ${screenSizes.md}){
 font-size: 16px;
 width: 150px;
}

@media only screen and (max-width: ${screenSizes.sm}){
 font-size: 14px;
 width: 100px;
}
`

const TiltUpperLeftLine = styled.div`
height: 30px;
width: 100%;
border-left: 3px solid #3182ce;
border-bottom: 3px solid #3182ce;
animation: ${props => fadeInSkew(props.translateX, props.skew)} 0.4s ease-out 1 forwards;
`

const TiltUpperRightLine = styled.div`
height: 30px;
width: 100%;
border-right: 3px solid #3182ce;
border-bottom: 3px solid #3182ce;
animation: ${props => fadeInSkew(props.translateX, props.skew)} 0.4s ease-out 1 forwards;
`

const TiltBottomRightLine = styled.div`
height: 30px;
width: 100%;
border-right: 3px solid #3182ce;
border-top: 3px solid #3182ce;
animation: ${props => fadeInSkew(props.translateX, props.skew)} 0.4s ease-out 1 forwards;
`

const TiltBottomLeftLine = styled.div`
height: 30px;
width: 100%;
border-left: 3px solid #3182ce;
border-top: 3px solid #3182ce;
animation: ${props => fadeInSkew(props.translateX, props.skew)} 0.4s ease-out 1 forwards;
`

const BackgroundWave = styled.div`
width: 0px;
height: 0px;
position: absolute;
background-color: #3182ce;
border-radius: 50%;
transform: translateY(-20px);
animation-name: ${props => props.active ? expandWave : ""};
animation-duration: 1s;
animation-iteration-count: 1;
animation-timing-function: ease-out;
`

const SeparateBox = styled.div`
width: 100%;
height: 0;
margin: 0 0;
animation: ${verticalExpand} 0.4s ease-out 1 0.4s forwards;
`


const IndexPage = () => {
  const [enableWave, setEnableWave] = useState(false);
  const [enableBranch, setEnableBranch] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== `undefined`) {
      const { isMobile } = require("../utils/isMobile");
      setIsMobile(isMobile);
    }
  }, []);

  return (
    <CoverPage>
      <GlobalStyle />
      <SEO title="Cover" />
      {
        !isMobile ? <Video src='/nexus.mp4' />: null
      }
      {/* <ImageBGContainer>
        <Image filename={'ascend'} />
      </ImageBGContainer> */}
      <BackgroundWave active={enableWave} onAnimationEnd={() => setEnableWave(false)} />

      <NavigationContainer active={enableBranch}>
        <AniLink fade duration={0.4} to="/home" >Home</AniLink>
        <TiltUpperLeftLine translateX={100} skew={35} />
        <SeparateBox />
        <TiltBottomLeftLine translateX={100} skew={-35} />
        <AniLink fade duration={0.4} to="/about">About</AniLink>
      </NavigationContainer>

      <CentralContainer>
      <TitleContainer>
          <div>DW</div> <div>Interactive</div> <div>Dev</div>
      </TitleContainer>
        <ButtonContainer onClick={() => {
          setEnableWave(true);
          setEnableBranch(true);
        }}>
          <PlayButton style={{ paddingLeft: 4 }} />
        </ButtonContainer>
      </CentralContainer>

      <NavigationContainer active={enableBranch}>
        <AniLink fade duration={0.4} to="/services" style={{ textAlign: "right" }}>Services</AniLink>
        <TiltUpperRightLine translateX={-100} skew={-35} />
        <SeparateBox />
        <TiltBottomRightLine translateX={-100} skew={35} />
        <AniLink fade duration={0.4} to="/contact" style={{ textAlign: "right" }}>Contact</AniLink>
      </NavigationContainer>
    </CoverPage>
  )
}

export default IndexPage
