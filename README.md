# Star Wars API Integration

The [Star Wars API](https://swapi.dev/) is an API containing information about many aspects of Star Wars. In particular, `https://swapi.dev/api/films` contains a list of the first 7 Star Wars movies that looks like this:

```json
{
  "count": 6,
  "next": null,
  "previous": null,
  "results": [{
    "title": "A New Hope",
    "episode_id": 4,
    "opening_crawl": "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
    "director": "George Lucas",
    "producer": "Gary Kurtz, Rick McCallum",
    "release_date": "1977-05-25",
    "characters": [
      "https://swapi.dev/api/people/1/",
      "https://swapi.dev/api/people/2/",
      "https://swapi.dev/api/people/3/",
      "https://swapi.dev/api/people/4/",
      "https://swapi.dev/api/people/5/",
      "https://swapi.dev/api/people/6/",
      "https://swapi.dev/api/people/7/",
      "https://swapi.dev/api/people/8/",
      "https://swapi.dev/api/people/9/",
      "https://swapi.dev/api/people/10/",
      "https://swapi.dev/api/people/12/",
      "https://swapi.dev/api/people/13/",
      "https://swapi.dev/api/people/14/",
      "https://swapi.dev/api/people/15/",
      "https://swapi.dev/api/people/16/",
      "https://swapi.dev/api/people/18/",
      "https://swapi.dev/api/people/19/",
      "https://swapi.dev/api/people/81/"
    ],
    "planets": [],
    "starships": [],
    "vehicles": [],
    "species": [],
    "created": "2014-12-10T14:23:31.880000Z",
    "edited": "2014-12-20T19:49:45.256000Z",
    "url": "https://swapi.dev/api/films/1/"
  }]
}
```

Meanwhile, `https://swapi.dev/api/people/:id` contains details about specific characters. For example, `https://swapi.dev/api/people/1` returns details about Luke Skywalker:

```json
{
  "name": "Luke Skywalker",
  "height": "172",
  "mass": "77",
  "hair_color": "blond",
  "skin_color": "fair",
  "eye_color": "blue",
  "birth_year": "19BBY",
  "gender": "male",
  "homeworld": "https://swapi.dev/api/planets/1/",
  "films": [
    "https://swapi.dev/api/films/2/",
    "https://swapi.dev/api/films/6/",
    "https://swapi.dev/api/films/3/",
    "https://swapi.dev/api/films/1/",
    "https://swapi.dev/api/films/7/"
  ],
  "species": [],
  "vehicles": [],
  "starships": [],
  "created": "2014-12-09T13:50:51.644000Z",
  "edited": "2014-12-20T21:17:56.891000Z",
  "url": "https://swapi.dev/api/people/1/"
}
```

Your task is to use these two endpoints to display a list of each movie as well and the names of its characters. Note that this will require a sequence of requests. If you do it correctly it will look like this:

![Star Wars films with their characters listed](https://ik.imagekit.io/sikaeducation/star-wars-api-integration/star-wars-api-integration-1_2IRDBQm-4.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665352265887&fr=w-1000)

Make sure to handle errors and display loading messages.
