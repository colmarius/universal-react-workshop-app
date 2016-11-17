# Step 5

## Description
Add HAPI server

## How-to

- Add HAPI: `npm i hapi --save`
- Move data to `server/data.json`
- Remove the `import data from 'data.json'` from `TalkList.jsx` and `TalkDetail.jsx`
- Create `server/index.js`:

``` javascript
  const Hapi = require('hapi')
  const talks = require('./data')

  const server = new Hapi.Server()
  server.connection({port: 4001})

  server.route({
    method: 'GET',
    path: '/api/talks',
    handler: (req, reply) => {
      reply(talks)
    }
  })

  server.route({
    method: 'GET',
    path: '/api/talk/{id}',
    handler: (req, reply) => {
      const id = Number(req.params.id)
      const talk = talks.find(el => el.id === id)
      reply(talk)
    }
  })

  server.route({
    method: 'POST',
    path: '/api/talk/vote',
    handler: (req, reply) => {
      const id = req.payload.id
      const talk = talks.find(el => el.id === id)
      talk.votes++
      reply(talks)
    }
  })

  server.start(function () {
      console.log(`Server running at port: ${server.info.port}`)
  })


```
- Add `concurrently` as dev tool (to launch both `webpack-dev-server` and `HAPI` server in dev):
`npm i concurrently --save-dev`

- Change the npm scripts in `pakcage.json` to run both servers:
``` json
"scripts": {
    "client:dev": "webpack-dev-server --progress --inline --hot --port 4000",
    "server:dev": "node ./server",
    "start": "concurrently -kr \"npm run client:dev\" \"npm run server:dev\"",
    "build": "npm run clean && npm run build:bundle",
    "clean": "rimraf build",
    "build:bundle": "webpack -p"
},
```
- Launch `npm start`. Both server should start. Check that HAPI Server is up&running
on port 4001 with browser:
- `http://127.0.0.1:4001/api/talks`
- `http://127.0.0.1:4001/api/talk/id`

- Change webpack config to act as reverse proxy:
``` javascript
  devServer: {
    historyApiFallback: true, // Needed for React Routing
    proxy: {
      '/api': 'http://localhost:4001'
    }
  }
```
- Check that now the API enpoints are answering also using 4000 port:
  - `http://127.0.0.1:4000/api/talks`
  - `http://127.0.0.1:4000/api/talk/id`
- Add `axios`: `npm i axios --save`
- Change `TalkList` and `TalkDetail` to load talks from API:
``` javascript
// (TODO)
```
