// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'
import Logo from '../brand/logo.svg'
// import Logo2 from '../brand/logo2.svg'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import DropDown from './dropdown'
import screenSizes from '../data/screenSizes'

const HeaderContainer = styled.div`
width: 100%;
min-height: 90px;
margin-top: 15px;
display: flex;
justify-content: space-between;
align-items: center;

& .mobile-only{
  display: none;

  @media only screen and (max-width: ${screenSizes.md}){
  display: flex;
  }
}
`
const LogoContainer = styled.div`
margin-left: 10%;
min-width: 100px;
`

const LogoBanner = styled.div`
font-family: Arial Black, Gadget, sans-serif;
color: white;
background:#3297FD;
padding: 12px 25px;
font-size: 36px;

@media only screen and (max-width: ${screenSizes.lg}){
  display: none;
}
`

const NavLinkContainer = styled.div`
display:flex;
justify-content: flex-end;
margin-right: 10%;

@media only screen and (max-width: ${screenSizes.md}){
  display: none;
}

.navLink {
  padding: 0 3%;
  font-size: 18px;
  font-weight: 500;
}

.highlighted {
  color: #3182ce;
}
`

const DropDownContainer = styled.div`
margin-right: 3%;
`

const Header = ({ siteTitle, location }) => {
  // console.log(location.pathname)
  return (
    <HeaderContainer>
      <LogoContainer >
        <AniLink fade duration={0.4} to="/" className="navLink" style={{ display: "flex", alignItems: "center" }}>
          <Logo width="120px" /><LogoBanner>DW Interactive Dev</LogoBanner>
        </AniLink>
      </LogoContainer>

      <NavLinkContainer>
        <AniLink fade duration={0.4} to="/" className={`navLink ${location.pathname === "/" ? 'highlighted' : ''}`} >Home</AniLink>
        <AniLink fade duration={0.4} to="/services" className={`navLink ${location.pathname === "/services" ? 'highlighted' : ''}`}>Services</AniLink>
        <AniLink fade duration={0.4} to="/blog" className={`navLink ${location.pathname.startsWith("/blog") ? 'highlighted' : ''}`}>Blog</AniLink>
        <AniLink fade duration={0.4} to="/about" className={`navLink ${location.pathname === "/about" ? 'highlighted' : ''}`}>About</AniLink>
        <AniLink fade duration={0.4} to="/contact" className={`navLink ${location.pathname === "/contact" ? 'highlighted' : ''}`} >Contact</AniLink>
      </NavLinkContainer>
      <DropDownContainer className="mobile-only">
        <DropDown />
      </DropDownContainer>
    </HeaderContainer>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
