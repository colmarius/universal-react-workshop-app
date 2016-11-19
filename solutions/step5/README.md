# Step 5

## Description
- Add HAPI server
- Use API
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
- Change `TalkList.jsx` and `TalkDetail.jsx` to load talks from API:

``` javascript
import React from 'react'
import Talk from './Talk.jsx'
import axios from 'axios'

const TalkList = React.createClass({

  getInitialState: function () {
    return {
      talks: [] // initial state
    }
  },

  componentDidMount: function () {
    axios.get('/api/talks')
      .then(res => {
        this.setState({talks: res.data})
      })
  },

  handleVote: function (talkId) {
    axios.post('/api/talk/vote', {id: talkId})
      .then( () => axios.get('/api/talks'))
      .then(res => {
        this.setState({talks: res.data})
      })
  },

  render: function () {
    // to check where rendering happens
    let inBrowser = false
    if (typeof window !== undefined) {
      inBrowser = true
    }

    const talks = this.state.talks.map(talk => {
      return (
        <Talk
          key={'talk-' + talk.id} // used by React
          id={talk.id}
          name={talk.name}
          author={talk.author}
          short={talk.short}
          votes={talk.votes}
          onVote={this.handleVote}
        ></Talk>
      )
    })
    return (
      <div className='talks'>
        {talks}
      </div>
    )
  }
})

export default TalkList
```

And:

``` javascript
import React from 'react'
import {Button} from 'react-bootstrap'
import {Link} from 'react-router'
import axios from 'axios'

const TalkDetail = React.createClass({
  getInitialState: function () {
    return {}
  },

  componentDidMount() {
    axios.get(`/api/talk/${this.props.params.id}`)
      .then(res => {
        this.setState(res.data)
      })
  },

  render: function () {
    return (
      <div>
        <h2>{this.state.name}</h2>
        <h3>{this.state.short}</h3>
        <h4>by {this.state.author}</h4>
        <h5>{this.state.description}</h5>
        <h5>Number of votes: &nbsp;<span className="badge">{this.state.votes}</span></h5>
        <div>
          <Link to='/'>Home</Link>&nbsp;
        </div>
      </div>
  )}
})

export default TalkDetail
```
- Test it. Now reloading the browser, the state should remain.

## NOTES:
Putting `console.log` to see React component state change we see:
- Get InitialState
- Rendering
- ComponentDidMount
- Rendering

This is because `componentDidMount` do a `setState` (which forces rendering)
