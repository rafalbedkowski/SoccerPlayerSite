import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import logo from "../images/ballRegular.png"

const StyledLogo = styled.img`
  height: 250px;
  width: 250px;
`

const NotfoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 100%;
`

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 24px;
  color: #fbba07;
`

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <NotfoundWrapper>
      <StyledLogo src={logo} alt="logo" />
      <h1>Podana strona nie istnieje</h1>
      <StyledLink to="/">przejdź na stronę główną</StyledLink>
    </NotfoundWrapper>
  </Layout>
)

export default NotFoundPage
