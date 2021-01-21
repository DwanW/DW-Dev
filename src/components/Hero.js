import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { Parallax } from "react-scroll-parallax"
import screenSizes from "../data/screenSizes"

import WebIcon from "../icons/web.svg"
import CodeIcon from "../icons/code.svg"
import LikeIcon from "../icons/like.svg"
import MobileIcon from "../icons/mobile.svg"
import PerformanceIcon from "../icons/performance.svg"
import SecureIcon from "../icons/secure.svg"
import SEOIcon from "../icons/seo.svg"

const HeroContainer = styled.div`
  position: relative;
  padding-top: 60px;

  @media only screen and (max-width: ${screenSizes.sm}) {
    padding-top: 40px;
  }
`

const HeroTextContainer = styled.div`
  padding: 10px 0;
`

const HeroHeader = styled.div`
  font-size: 48px;
  line-height: 1.25;
  font-weight: 600;
  text-align: center;

  @media only screen and (max-width: ${screenSizes.sm}) {
    font-size: 30px;
    margin: 0 30px;
  }
`

const HeroSubHeader = styled.div`
  font-size: 24px;
  line-height: 1.25;
  font-weight: 300;
  text-align: center;
  color: gray;
  margin-top: 20px;

  @media only screen and (max-width: ${screenSizes.sm}) {
    font-size: 16px;
    margin: 20px 30px 0 30px;
  }
`

const HeroImageContainer = styled.div`
  position: relative;
  margin-top: 50px;
  min-height: 50vh;
  display: flex;
`

const PrimaryHeroImage = styled.div`
  width: 200px;
  margin: 0 auto;
  align-self: center;
  position: relative;
`

const BackgroundTopLayer = styled.div`
  position: absolute;
  background-color: #3182ce;
  height: 300px;
  width: 300px;
  top: -60px;
  left: -50px;
  z-index: -1;
  border-radius: 50%;
`

const BackgroundBottomLayer = styled.div`
  position: absolute;
  background-color: #64b5f6;
  height: 450px;
  width: 450px;
  top: -135px;
  left: -125px;
  z-index: -2;
  border-radius: 50%;
`

const SecondaryHeroImage = styled(Parallax)`
  position: absolute;
  height: 50px;
  width: 50px;
  top: ${props => props.top};
  left: ${props => props.left};
`

const IconWrapper = styled.div`
  height: 60px;
  width: 60px;
  padding: 12px;
  border-radius: 50%;
`

const Hero = () => {
  const [isParallaxDisabled, setParallaxDisabled] = useState(false)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const { isMobile } = require("../utils/isMobile")
      setParallaxDisabled(isMobile)
    }
  }, [])

  return (
    <HeroContainer>
      <HeroTextContainer>
        <HeroHeader>
          Modern web development and design that drives engagement
        </HeroHeader>
        <HeroSubHeader>
          We help you build fast performing applications{" "}
        </HeroSubHeader>
      </HeroTextContainer>
      <HeroImageContainer>
        <SecondaryHeroImage
          x={["-100px", "100px"]}
          y={["-75px", "75px"]}
          top={"10%"}
          left={"15%"}
          disabled={isParallaxDisabled}
        >
          <IconWrapper style={{ backgroundColor: "#00695c" }}>
            <CodeIcon />
          </IconWrapper>
        </SecondaryHeroImage>

        <SecondaryHeroImage
          x={["115px", "-125px"]}
          y={["-50px", "60px"]}
          top={"15%"}
          left={"85%"}
          disabled={isParallaxDisabled}
        >
          <IconWrapper style={{ backgroundColor: "#558b2f" }}>
            <LikeIcon />
          </IconWrapper>
        </SecondaryHeroImage>

        <SecondaryHeroImage
          x={["-30px", "25px"]}
          y={["-80px", "75px"]}
          top={"0%"}
          left={"40%"}
          disabled={isParallaxDisabled}
        >
          <IconWrapper style={{ backgroundColor: "#212121" }}>
            <MobileIcon />
          </IconWrapper>
        </SecondaryHeroImage>

        <SecondaryHeroImage
          x={["45px", "-100px"]}
          top={"50%"}
          left={"75%"}
          disabled={isParallaxDisabled}
        >
          <IconWrapper style={{ backgroundColor: "#6a1b9a" }}>
            <PerformanceIcon />
          </IconWrapper>
        </SecondaryHeroImage>

        <SecondaryHeroImage
          x={["-25px", "125px"]}
          y={["25px", "-75px"]}
          top={"80%"}
          left={"20%"}
          disabled={isParallaxDisabled}
        >
          <IconWrapper style={{ backgroundColor: "#64dd17" }}>
            <SecureIcon />
          </IconWrapper>
        </SecondaryHeroImage>

        <SecondaryHeroImage
          x={["15px", "-50px"]}
          y={["15px", "-40px"]}
          top={"70%"}
          left={"60%"}
          disabled={isParallaxDisabled}
        >
          <IconWrapper style={{ backgroundColor: "#ad1457" }}>
            <SEOIcon />
          </IconWrapper>
        </SecondaryHeroImage>
        <PrimaryHeroImage>
          <WebIcon />
          <BackgroundTopLayer />
          <BackgroundBottomLayer />
        </PrimaryHeroImage>
      </HeroImageContainer>
    </HeroContainer>
  )
}

export default Hero
