import React from "react"

import styled from "styled-components"

const BlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-bottom: 10px;

  @media (min-width: 800px) {
    width: 100%;
    margin-top: 50px;
  }
`

const StyledH2 = styled.h2`
  font-size: 20px;
  color: #fff;
  text-transform: uppercase;
  font-weight: 550;
  text-align: right;
  margin: 0;

  @media (min-width: 800px) {
    font-size: 36px;
    text-transform: lowercase;
    font-weight: 500;

    animation-name: changePositionRight;
    animation-duration: 1.5s;

    @keyframes changePositionLeft {
      0% {
        transform: translateX(-1000px);
      }
      100% {
        transform: translateX(0);
      }
    }
  }
`

const StyledSpan = styled.span`
  font-size: 10px;
  text-transform: uppercase;
  font-weight: 300;
  margin: 5px 0;
  text-align: right;
  letter-spacing: 2px;
  @media (min-width: 800px) {
    overflow: hidden;
    font-size: 24px;
    text-transform: lowercase;
    font-weight: 300;

    animation-name: changePositionRight;
    animation-duration: 2s;

    @keyframes changePositionLeft {
      0% {
        transform: translateX(-1000px);
      }
      100% {
        transform: translateX(0);
      }
    }
  }
`

const MainHead = props => {
  const { value, title } = props
  return (
    <BlockWrapper>
      <StyledH2>{title}</StyledH2>
      <StyledSpan>{value}</StyledSpan>
    </BlockWrapper>
  )
}

export default MainHead
