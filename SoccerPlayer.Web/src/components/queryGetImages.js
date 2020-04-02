import { useStaticQuery, graphql } from "gatsby"

export const ImageGallery = () => {
  const { allFile } = useStaticQuery(
    graphql`
      query PhotoQuery {
        allFile(
          filter: {
            extension: { regex: "/(jpg)|(png)|(tif)|(tiff)|(webp)|(jpeg)/" }
            childImageSharp: { fluid: {} }
          }
          sort: { fields: modifiedTime, order: DESC }
        ) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 1024, webpQuality: 10) {
                  base64
                  aspectRatio
                  src
                  srcSet
                  sizes
                }
                resize(width: 600, quality: 80) {
                  aspectRatio
                  src
                }
              }
            }
          }
        }
      }
    `
  )

  return allFile.edges
}
