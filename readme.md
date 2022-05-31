### Twiiter Application

- Create a social media app using MongoDB, Express, Node, React, GraphQL, and Node (the MERNG stack).
- To implement a GraphQL server that uses Node and Express to communicate to a MongoDB Database and fetch and persist data to a social media app back-end.
- Providing authentication using JWT token and Bcrypt
- Deploy through Heroku (server side) and Netlify (client side)

Start project both server (from root directory) and client folder

```
npm install
```

Start server side

```
npm run serve
```

Start client side

```
npm run start
```

We can check `query` or `mutation` from GraphQL server on

```
//https://murmuring-shore-36816.herokuapp.com/

Example:

{
    getPosts{
        body
        createdAt
    }
}

Result:
{
  "data": {
    "getPosts": [
      {
        "body": "First time posting! that's amazing!",
        "createdAt": "2022-05-31T00:28:54.773Z"
      },
      {
        "body": "Hi my name is Jonathan!",
        "createdAt": "2022-05-31T00:27:45.284Z"
      },
      {
        "body": "new mesg",
        "createdAt": "2022-05-30T12:58:04.629Z"
      },
    ]
  }
}
```

_Credit to the class of hidjou but I have updated to the lastest version for all packages and tools_
