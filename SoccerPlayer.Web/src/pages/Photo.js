import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import Img from "gatsby-image"
import { ImageGallery } from "../components/queryGetImages"
import { PlayerJson } from "../components/queryPlayerJson"

const PhotoContainer = styled.div`
  @media (min-width: 800px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;

    :active {
      ::after {
        content: "";
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-color: #000;
        opacity: 0.7;
        filter: blur(3px);
      }
    }
  }

  animation-name: changePositionY;
  animation-duration: 2s;
  animation-timing-function: cubic-bezier(0.5, 1.6, 0.4, 0.7);

  @keyframes changePositionY {
    0% {
      transform: translateY(1000px);
    }
    100% {
      transform: translateY(0);
    }
  }
`

const PhotoWrapper = styled(Img)`
  position: relative;
  margin-bottom: 20px;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 5px 5px -2px rgba(0, 0, 0, 0.75);

  @media (min-width: 800px) {
    margin: 10px;
    box-shadow: 10px 10px 10px -2px rgba(0, 0, 0, 0.75);

    transition: all 500ms;
  }
`

const Modal = styled.div`
  @media (min-width: 800px) {
    position: relative;
    width: 200px;
    margin: 10px;
    transition: all 500ms;

    :active {
      position: fixed;
      display: block;
      top: 10vh;
      width: 100vh;
      max-width: 90vw;
      max-height: 80vh;
      transform: rotate(360deg);
      border: 3px solid #fbba07;
      border-radius: 10px;
      border-radius: 10px;
      z-index: 100;
      filter: none;
    }

    :hover {
      filter: grayscale(100%);

      :active {
        filter: grayscale(0%);

        ::after {
          content: "";
        }
      }

      ::after {
        content: "click & hold";
        position: absolute;
        text-align: center;

        font-size: 30px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
`

export const PhotoPage = ({ data }) => {
  const edges = ImageGallery()
  const { name } = PlayerJson()

  return (
    <Layout>
      <SEO title="Zdjęcia" description={`Galeria zdjęć`} />
      <PhotoContainer>
        {edges.map(photo => {
          return (
            <Modal>
              <PhotoWrapper
                key={photo.node.childImageSharp.fluid.src}
                fluid={photo.node.childImageSharp.fluid}
                alt={`Galeria zdjęć - ${name}`}
              />
            </Modal>
          )
        })}
      </PhotoContainer>
    </Layout>
  )
}

export default PhotoPage
