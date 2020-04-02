module.exports = {
  proxy: {
    prefix: "/graphql",
    //replace http://localhost:5000 to your host or site domain
    url: "http://localhost:5000/graphql",
  },
  siteMetadata: {
    title: ``,
    description: ``,
    author: `www.morezo.pl`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Montserrat\:300,400,500,700`, `Roboto Condensed`],
        display: "swap",
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "Player",
        fieldName: "Player",
        //replace http://localhost:5000 to your host or site domain
        url: "http://localhost:5000/graphql",
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/gallery`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `SoccerPlayer`,
        short_name: `SoccerPlayer`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `browser`,
        icon: `src/images/ballRegular.png`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "" with your own Tracking ID
        trackingId: "UA-XXXXXXXXX-X",
      },
    },
  ],
}
