import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled, { createGlobalStyle } from "styled-components"
import { PlayerData } from "../components/queryPlayerData"
import Stat from "../components/stat"
import MainHead from "../components/mainHead"
import { graphql } from "gatsby"

const GlobalStyle = createGlobalStyle`
body{
  padding:0;
  margin:0;
  font-family: 'Montserrat Regular', 'Roboto Condensed', sans-serif;
  color: #FFF;
}

*, *::before, *::after {
  box-sizing: border-box;
}
`

const StyledDiv = styled.div`
  display: grid;
  grid-template-rows: 15% 10% 10% 10% 10% 10% 10% 10% 15%;
  position: absolute;
  top: 60px;
  left: 5%;
  right: 5%;
  bottom: 30px;

  @media (min-width: 800px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-end;
    align-content: flex-end;
    justify-content: center;
    top: 160px;
    left: 20%;
    right: 20%;
    bottom: 30px;
  }
`

export const query = graphql`
  query UserData {
    allDataJson {
      edges {
        node {
          user {
            leg
            name
            position
          }
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  const { position, leg } = data.allDataJson.edges[0].node.user
  const {
    currentClub,
    playerAge,
    matchesPlayed,
    minutesOnThePitch,
    yellowCards,
    redCards,
    goals,
    firstName,
    lastName,
  } = PlayerData().player

  return (
    <>
      <GlobalStyle />
      <Layout>
        <SEO
          title="Strona główna"
          description={`strona główna - ${firstName} ${lastName}`}
        />
        <StyledDiv>
          <Stat title="aktualny klub" value={currentClub} />
          <Stat title="wiek" value={playerAge} />
          <Stat title="mecze" value={matchesPlayed} />
          <Stat title="minuty" value={minutesOnThePitch} />
          <Stat title="bramki" value={goals} />
          <Stat title="żółte" value={yellowCards} />
          <Stat title="czerwone" value={redCards} />
          <Stat title="noga" value={leg} />
          <MainHead title={`${firstName} ${lastName}`} value={position} />
        </StyledDiv>
      </Layout>
    </>
  )
}

export default IndexPage
