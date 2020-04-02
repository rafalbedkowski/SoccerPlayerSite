import React from "react"

import { Link } from "gatsby"
import PropTypes from "prop-types"

import styled from "styled-components"

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  display: flex;
  text-transform: uppercase;
  color: #fff;
  align-items: center;
  justify-content: center;
  height: 60px;
  background-color: rgba(52, 49, 49, 0.8);
  z-index: 100;

  @media (min-width: 800px) {
    visibility: hidden;
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <StyledLink to="/">{siteTitle}</StyledLink>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
