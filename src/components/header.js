// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'
import Logo from '../brand/logo.svg'
// import Logo2 from '../brand/logo2.svg'
import AniLink from "gatsby-plugin-transition-link/AniLink"

const HeaderContainer = styled.div`
width: 100%;
min-height: 90px;
margin-top: 15px;
overflow: hidden;
display: flex;
justify-content: space-between;
align-items: center;
`
const LogoContainer = styled.div`
margin-left: 10%;
min-width: 100px;
`

const NavLinkContainer = styled.div`
display:flex;
justify-content: flex-end;
margin-right: 10%;

.navLink {
  padding: 0 3%;
  font-size: 18px;
  font-weight: 500;
}

.highlighted {
  color: #3182ce;
}
`

const Header = ({ siteTitle, location }) => {

  return (
    <HeaderContainer>
      <LogoContainer >
        <AniLink fade duration={0.4} to="/" className="navLink" style={{display: "flex", alignItems: "center", fontSize: "50px"}}>
          <Logo width="120px"/><div style={{ fontFamily: "Arial Black, Gadget, sans-serif", color:"white", background:"#3297FD", padding: "18px 40px"}}>DW Interactive Dev</div>
        </AniLink>
      </LogoContainer>

      <NavLinkContainer>
        <AniLink fade duration={0.4} to="/home" className={`navLink ${location.pathname === "/home" ? 'highlighted' : ''}`} >Home</AniLink>
        <AniLink fade duration={0.4} to="/services" className={`navLink ${location.pathname === "/services" ? 'highlighted' : ''}`}>Services</AniLink>
        <AniLink fade duration={0.4} to="/blog" className={`navLink ${location.pathname.startsWith("/blog") ? 'highlighted' : ''}`}>Blog</AniLink>
        <AniLink fade duration={0.4} to="/about" className={`navLink ${location.pathname === "/about" ? 'highlighted' : ''}`}>About</AniLink>
        <AniLink fade duration={0.4} to="/contact" className={`navLink ${location.pathname === "/contact" ? 'highlighted' : ''}`} >Contact</AniLink>
      </NavLinkContainer>
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
