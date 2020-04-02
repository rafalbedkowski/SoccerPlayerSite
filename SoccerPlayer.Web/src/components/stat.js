import React from "react"

import styled from "styled-components"

const BlockWrapper = styled.div`
  margin-bottom: 25px;
  margin-top: 5px;

  @media (min-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(78, 78, 77, 0.6);
    width: 90px;
    height: 90px;
    margin: 10px 10px;
    border-radius: 50%;

    transition: all 300ms;
    animation-name: changePositionX;
    animation-duration: 1s;
    animation-fill-mode: backwards;
    animation-timing-function: cubic-bezier(0.5, 1.6, 0.4, 0.7);

    @keyframes changePositionX {
      0% {
        transform: translateX(-1500px);
      }
      100% {
        transform: translateX(0);
      }
    }

    :first-child {
      position: absolute;
      justify-content: flex-start;
      align-items: flex-start;
      top: 0;
      left: 0;
      width: 500px;
      background-color: transparent;
      padding: 0;
      box-shadow: none;

      animation-name: changePosition;
      animation-duration: 1s;

      @keyframes changePosition {
        0% {
          transform: translateY(-500px);
        }
        100% {
          transform: translateY(0);
        }
      }
    }

    :first-child:hover {
      border: none;
      transform: none;
    }

    :hover {
      transform: scale(1.5) rotateZ(360deg);
      border-bottom: 2px solid #fbba07;
    }

    :nth-child(3) {
      animation-delay: 0.2s;
    }

    :nth-child(4) {
      animation-delay: 0.4s;
    }

    :nth-child(5) {
      animation-delay: 0.6s;
    }

    :nth-child(6) {
      animation-delay: 0.8s;
    }

    :nth-child(7) {
      animation-delay: 1s;
    }

    :nth-child(8) {
      animation-delay: 1.2s;
    }
  }
`

const StyledH2 = styled.h2`
  font-size: 10px;
  color: #a7a6a6;
  text-transform: uppercase;
  font-weight: 550;
  margin: 0;

  @media (min-width: 800px) {
    font-family: "Roboto condensed";
    font-size: 14px;
    font-weight: 400;
    text-transform: lowercase;
    text-shadow: none;
    color: #fff;
  }
`

const StyledSpan = styled.span`
  font-size: 14px;
  color: #fbba07;
  font-weight: 500;
  text-shadow: 2px 2px #343131;
  text-transform: uppercase;
  margin: 0;

  @media (min-width: 800px) {
    font-size: 24px;
    font-weight: 400;
    text-transform: lowercase;
    text-shadow: none;
    margin-top: 5px;
  }
`

const Stat = props => {
  const { value, title } = props
  return (
    <BlockWrapper>
      <StyledH2>{title}</StyledH2>
      <StyledSpan>{value}</StyledSpan>
    </BlockWrapper>
  )
}

export default Stat
