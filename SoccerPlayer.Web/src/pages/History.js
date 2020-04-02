import React from "react"

import { PlayerData } from "../components/queryPlayerData"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const BlockWrapper = styled.div`
  border-bottom: 1px solid #707070;
  box-shadow: 0px 2px 2px -2px rgba(0, 0, 0, 0.75);
  margin-bottom: 40px;

  @media (min-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 300px;
    background-color: rgba(78, 78, 77, 0.6);

    border-bottom: 3px solid #707070;
    border-radius: 50%;
    box-shadow: 0px 6px 6px -2px rgba(0, 0, 0, 0.75);
    transform: rotateZ(0) scale(1);
    transition: all 500ms;
    margin-bottom: 10px;

    animation-name: changePositionLeft;
    animation-duration: 2s;
    animation-timing-function: cubic-bezier(0.5, 1.6, 0.4, 0.7);

    &:nth-child(even) {
      border-color: #fbba07;
      align-self: center;

      animation-name: changePositionRight;
      animation-duration: 2s;
      animation-timing-function: cubic-bezier(0.5, 1.6, 0.4, 0.7);

      :hover {
        border-bottom: none;
        border-top: 3px solid #fbba07;
        transform-style: preserve-3d;
        transform: rotateZ(360deg) scale(1.5);
        transition: all 500ms;
      }
    }

    :hover {
      border-bottom: none;
      border-top: 3px solid #707070;
      transform-style: preserve-3d;
      transform: rotateZ(360deg) scale(1.5);
      transition: all 500ms;
    }

    @keyframes changePositionLeft {
      0% {
        transform: translateX(-1000px);
      }
      100% {
        transform: translateX(0);
      }
    }

    @keyframes changePositionRight {
      0% {
        transform: translateX(1000px);
      }
      100% {
        transform: translateX(0);
      }
    }
  }
`

const StyledH2 = styled.h2`
  font-size: 12px;
  color: #a7a6a6;
  text-transform: uppercase;
  font-weight: 500;

  @media (min-width: 800px) {
    font-size: 16px;
  }
`

const StyledP = styled.p`
  font-size: 12px;
  font-weight: bold;
  color: #fbba07;

  @media (min-width: 800px) {
    text-align: center;
    font-size: 20px;
    text-transform: lowercase;
    font-weight: 500;
    margin-bottom: 50px;
  }
`

const HistoryContainer = styled.div`
  @media (min-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
`

const HistoryPage = () => {
  const { clubs } = PlayerData().player

  return (
    <Layout>
      <SEO title="Historia" description={`Historia gry klubowej`} />
      <HistoryContainer className="dupa">
        {clubs.map((data, index) => {
          return (
            <BlockWrapper key={index}>
              <StyledH2>sezon {data.season}</StyledH2>
              <StyledP>{data.name}</StyledP>
            </BlockWrapper>
          )
        })}
      </HistoryContainer>
    </Layout>
  )
}

export default HistoryPage
