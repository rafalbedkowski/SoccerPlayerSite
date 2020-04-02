import React, { useState } from "react"
import PropTypes from "prop-types"

import styled, { createGlobalStyle } from "styled-components"

import Header from "./header"
import Footer from "./footer"
import Hamburger from "./hamburger"
import Navigation from "./navigation"
import background from "../images/background.jpg"
import backgroundMobile from "../images/backgroundMobile.jpg"

const GlobalStyle = createGlobalStyle`
body{
  padding:0;
  margin:0;
  font-family: 'Montserrat', 'Roboto Condensed', 'sans-serif';
  color: #FFF;
  overflow-x: hidden;
}

*, *::before, *::after {
  box-sizing: border-box;
}
`

const BodyWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: #343131;
  background-image: url(${backgroundMobile});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;

  @media (min-width: 800px) {
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
  }
`

const StyledMain = styled.main`
  min-height: 100vh;
  width: 100%;
  padding: 60px 5% 30px 5%;

  @media (min-width: 800px) {
    padding: 160px 20% 30px 20%;
  }
`

const Layout = ({ children }) => {
  const [isActive, setActive] = useState(false)
  const handleClickHamburger = e => {
    isActive ? setActive(false) : setActive(true)
  }

  return (
    <>
      <GlobalStyle />
      <Header siteTitle={children[0].props.title} />
      <Hamburger isActive={isActive} onClick={handleClickHamburger} />
      <Navigation isActive={isActive} onClick={handleClickHamburger} />
      <BodyWrapper>
        <StyledMain>{children}</StyledMain>
      </BodyWrapper>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
