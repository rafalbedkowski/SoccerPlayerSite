import { useStaticQuery, graphql } from "gatsby"

export const PlayerJson = () => {
  const { allDataJson } = useStaticQuery(
    graphql`
      query PlayerQuery {
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
  )

  return allDataJson.edges[0].node.user
}
