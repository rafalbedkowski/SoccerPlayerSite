import { useStaticQuery, graphql } from "gatsby"

export const PlayerData = () => {
  const { Player } = useStaticQuery(
    graphql`
      query MyQuery {
        Player {
          player(userUrl: "") {
            firstName
            lastName
            playerAge
            currentClub
            matchesPlayed
            minutesOnThePitch
            goals
            yellowCards
            redCards
            clubs {
              season
              name
            }
          }
        }
      }
    `
  )

  return Player
}
