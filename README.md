# Personal Soccer Player Website ( Polish Player -over 12 years old)

Website design for Polish players over 12 years old (such are registered on the laczynaspilka.pl website)

## Getting Started

Clone or download repository

```
https://github.com/rafalbedkowski/SoccerPlayerSite.git
```

### Prerequisites

Go to directory

```
/SoccerPlayer.Api/
```

run

```
dotnet restore
```

Then
Go to directory

```
/SoccerPlayer.Web/
```

run

```
npm install
```

Search Player Name on laczynaspilka.pl an save your configuration string
example:

https://www.laczynaspilka.pl/zawodnik/jan-kowalski,783844.html

```
your your configuration string: jan-kowalski,783844.html
```

### Configure

Edit files :

```
/SoccerPlayer.Api/appsettings.json

"EmailConfiguration": {
    "SmtpServer": "your SMTP server",
    "From": "your mail",
    "Port": number port,
    "UserName": "user name to SMTP server",
    "Password": "password to your mail"
  }
```

```
/SoccerPlayer.Web/gatsby-config.js

{
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "Player",
        fieldName: "Player",
        //replace http://localhost:5000 to your host or site domain
        url: "http://localhost:5000/graphql",
      },
    },
```

```
/SoccerPlayer.Web/src/data/config.json

"user": {
    "name": "Your Name", //jan kowalski
    "leg": "leg", // lewa
    "position": "Position on pitch" / obrońca
  },

"youtubeLink": [{
      "link": "youtube link to movie"
    },
    {
      "link": "youtube link to movie"
    },
    {
      "link": "youtube link to movie"
    },
    {
      "link": "youtube link to movie"
    }
  ]
```

/SoccerPlayer.Web/src/queryPlayerData.js

```
Player {
          player(userUrl: "your configuration string") {
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
```

/SoccerPlayer.Web/src/pages/contact.js
replace http://localhost:5000 to your website domain or localhost

```
URL_SEND_EMAIL = "http://localhost:5000/EmailApi/SendEmailAsync"
```

Live Demo
[Demo](www.bartlomiejbedkowski.pl)

## Deployment

Go to directory

```
/SoccerPlayer.Web
```

run

```
gatsby build
```

copy of source directory /SoccerPlayer.Web/public to /SoccerPlayer.Api/wwwroot

Go to directory

```
/SoccerPlayer.Api
```

run

```
dotnet publish -c Release
```

and publish project /SoccerPlayer.Api

## Run Site

Go to directory

```
/SoccerPlayer.Api
```

end

```
dotnet run
```

open Site on http://localhost:8000

## Authors

- **Rafał Będkowski** - [Morezo.pl](https://github.com/rafalbedkowski)
