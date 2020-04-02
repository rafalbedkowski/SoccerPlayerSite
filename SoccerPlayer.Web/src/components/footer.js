import PropTypes from "prop-types"
import React from "react"

import styled from "styled-components"

const FooterWrapper = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  text-transform: uppercase;
  color: #fff;
  align-items: center;
  justify-content: center;
  height: 30px;
  background-color: #83236b;
  color: #fff;
`

const StyledA = styled.a`
  color: #fff;
  text-decoration: none;
  font-family: "Roboto Condensed";
  line-height: 30px;
  font-size: 16px;
`

const Footer = () => (
  <FooterWrapper>
    <footer>
      <StyledA href="http://www.morezo.pl">© Rafał Będkowski</StyledA>
    </footer>
  </FooterWrapper>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
