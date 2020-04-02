import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import { graphql } from "gatsby"

const VideoWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 30px;
  height: 0;
  overflow: hidden;
  margin-bottom: 20px;
  box-sizing: border-box;
  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.75);

  iframe,
  object,
  embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }
`

export const query = graphql`
  query VideoData {
    allDataJson {
      edges {
        node {
          youtubeLink {
            link
          }
        }
      }
    }
  }
`

const VideoPage = ({ data }) => {
  const { youtubeLink } = data.allDataJson.edges[0].node
  return (
    <Layout>
      <SEO title="Video" description={`Galeria filmów`} />
      {youtubeLink.map(video => {
        return (
          <VideoWrapper key={video.link}>
            <iframe
              src={video.link}
              title={video.link}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              rel="0"
              showinfo="0"
            ></iframe>
          </VideoWrapper>
        )
      })}
    </Layout>
  )
}

export default VideoPage
