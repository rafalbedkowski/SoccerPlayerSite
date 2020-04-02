import React from "react"

import styled from "styled-components"

const HamburgerWrapper = styled.button`
  position: fixed;
  top: 20px;
  left: 5%;
  width: 30px;
  border: 0;
  border-top: ${({ isActive }) => (isActive ? "" : "2px solid #fff")};
  background-color: transparent;
  outline: none;
  z-index: 100;

  ::before,
  ::after {
    content: "";
    position: absolute;
    top: ${({ isActive }) => (isActive ? "2px" : "0")};
    left: ${({ isActive }) => (isActive ? "2px" : "0")};
    width: 100%;
    border-top: 2px solid #fff;
    transform: translateY(7px);

    transition: 0.3s transform linear;
  }

  ::after {
    transform: ${({ isActive }) =>
      isActive ? "rotate(-45deg) translateX(-10px)" : "translateY(16px)"};
    transition: 0.3s transform linear;
  }

  ::before {
    transform: ${({ isActive }) =>
      isActive ? "rotate(45deg) translateY(10px)" : "translateY(7px)"};
  }

  @media (min-width: 800px) {
    visibility: hidden;
  }
`

const Hamburger = props => {
  return <HamburgerWrapper onClick={props.onClick} isActive={props.isActive} />
}

export default Hamburger
