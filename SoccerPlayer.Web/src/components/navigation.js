import React from "react"

import { Link } from "gatsby"

import styled from "styled-components"
import image from "../images/ballRegular.png"

const NavigationWrapper = styled.div`
  position: fixed;
  top: 60px;
  background-color: #4e4e4d;
  border-radius: 5px;
  width: 90%;
  height: 325px;
  padding: 0 20px;
  margin: 0 5%;
  z-index: 100;
  transform: ${({ isActive }) => (isActive ? "scaleY(1)" : "scaleY(0)")};
  transform-origin: 0 0;
  transition: opacity 0.3s ease,
    transform 0.3s cubic-bezier(0.2, 0.38, 0.72, 1.3);

  @media (min-width: 800px) {
    transform: scaleY(1);
    background-color: rgba(52, 49, 49, 0.7);
    border-radius: 0;
    padding: 0;
    padding-right: 20%;
    margin: 0;
    width: 100%;
    height: auto;
  }
`

const StyledUl = styled.ul`
  list-style: none;
  text-transform: uppercase;
  margin: 0;
  padding: 0;
  width: 100%;

  @media (min-width: 800px) {
    display: flex;
    justify-content: flex-end;
  }
`

const StyledLi = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 80px;
  margin: 0;
  border-bottom: 1px solid #6b6d6a;
  box-shadow: 0px 2px 2px -2px rgba(0, 0, 0, 0.75);

  :last-child {
    border-bottom: none;
    box-shadow: none;
  }

  :first-child {
    display: none;
  }

  @media (min-width: 800px) {
    width: auto;
    border: none;
    box-shadow: none;
    font-weight: 400;
    letter-spacing: 2px;
    line-height: 60px;
    margin-right: 20px;

    ::after {
      content: " /";
      white-space: pre;
    }

    :last-child::after {
      content: "";
    }

    :first-child {
      display: flex;
    }

    :last-child {
      margin-right: 0;
    }
  }
`

const StyledLink = styled(Link)`
  position: relative;
  width: 100%;
  text-align: center;
  color: #fff;
  text-decoration: none;
  text-shadow: 2px 2px #343131;
  cursor: pointer;
  box-sizing: border-box;
  transition: all 300ms;

  &.active {
    color: #fbba07;
  }

  &.active::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 20px;
    transform: translateY(-50%);
    height: 25px;
    width: 25px;
    background-image: url(${image});
    background-size: 100% 100%;
    z-index: 900;
  }

  @media (min-width: 800px) {
    width: auto;
    text-transform: lowercase;

    ::before {
      content: "";
      position: absolute;
      background-image: none;
      height: 100%;
      width: 100%;
      border-bottom: 2px solid #fff;
      transform: scaleX(0);
      transition: all 350ms;
    }

    :hover::before {
      transform: scaleX(1);
    }

    &.active::before {
      content: "";
      position: absolute;
      background-image: none;
      height: 100%;
      width: 100%;
      left: 0;
      border-bottom: 2px solid #fbba07;
    }

    &.active:hover::before {
      content: "";
      position: absolute;
      top: 0;
      transform: none;
      transition: none;
    }
  }
`

const Navigation = props => {
  return (
    <NavigationWrapper isActive={props.isActive} onClick={props.onClick}>
      <StyledUl>
        <StyledLi>
          <StyledLink to="/" activeClassName="active">
            Home
          </StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink to="/History" activeClassName="active">
            historia
          </StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink to="/Photo" activeClassName="active">
            zdjęcia
          </StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink to="/Video" activeClassName="active">
            video
          </StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink to="/Contact" activeClassName="active">
            kontakt
          </StyledLink>
        </StyledLi>
      </StyledUl>
    </NavigationWrapper>
  )
}

export default Navigation
