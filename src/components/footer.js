import React from "react"
import styled from 'styled-components'
import FaceBookIcon from '../icons/facebook.svg'
import InstagramIcon from '../icons/instagram.svg'
import LinkedInIcon from '../icons/linkedin.svg'
import TwitterIcon from '../icons/twitter.svg'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Image from "./image"

const FooterContainer = styled.div`
width: 100%;
max-height: 574px;
min-height: 400px;
overflow: hidden;
position: relative;
display: flex;
justify-content: center;
align-items: center;
`

const ImageGradient = styled.div`
position: absolute;
top: 0;
height: 115px;
width: 100%;
z-index: 0;
background: linear-gradient(to top, rgba(196, 196, 196, 0) 0%, #FFFFFF 100%);
`

const MediaLinkContainer = styled.div`
width: fit-content;
display: flex;
align-items: center;
justify-content: center;
`

const LinkContainer = styled.div`
width: 40px;
height: 40px;
margin: 0 20px;
`

const FooterNavLinkContainer = styled.div`
width: fit-content;
display: flex;
flex-direction: column;
margin-left: 20px;

.navLink {
  margin: 10px 0;
  font-size: 18px;
  font-weight: 500;
  color: white;
}
`

const Footer = () => (
  <FooterContainer>
        <ImageGradient />
        <Image filename={'foot-bg'} wrapperStyle={{backgroundColor: '#3182CE', position: "absolute", width: "100%", height: "100%", top: 0, zIndex: -1}} imgStyle={{opacity: 0.2}} />
        <MediaLinkContainer>
          <LinkContainer><a href="https://www.facebook.com/dwan.wang.585" target="_blank" aria-label="facebook" rel="noreferrer" ><FaceBookIcon /></a></LinkContainer>
          <LinkContainer><a href="https://www.instagram.com/dwinteractivedev/" target="_blank" aria-label="instagram" rel="noreferrer" ><InstagramIcon /></a></LinkContainer>
          <LinkContainer><a href="http://www.linkedin.com/company/dw-interactive-dev" target="_blank" aria-label="linkedin" rel="noreferrer" ><LinkedInIcon /></a></LinkContainer>
          <LinkContainer><a href="https://twitter.com/Dwan87734256" target="_blank" aria-label="twitter" rel="noreferrer" ><TwitterIcon /></a></LinkContainer>
        </MediaLinkContainer>
        <FooterNavLinkContainer>
          <AniLink fade duration={0.4} to="/home" className="navLink" >Home</AniLink>
          <AniLink fade duration={0.4} to="/services" className="navLink">Services</AniLink>
          <AniLink fade duration={0.4} to="/contact" className="navLink" >Contact</AniLink>
        </FooterNavLinkContainer>
  </FooterContainer>
)

export default Footer