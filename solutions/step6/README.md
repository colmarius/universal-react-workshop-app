# Step 6

## Description
- Add first page (TalkList) SSR.
- Note that SSR it's only about rendering the first state page, then JS/react
starts and then the state is restored. That's the reason we render
TalkList.

We are going to maitain both behaviour (fro comparison):
- http://127.0.0.1:4000 -> client side first rendering
- http://127.0.0.1:4000/ssr -> client side first rendering

## How-to
- Add babel hook: npm i babel-register --save
- Create a `server/start.js` that register the hook:
``` javascript
require('babel-register')({
    presets: ['es2015', 'react'] // ...or use .babelrc
})
module.exports = require('.')
```
- Change the server start script to use the above in `package.json`:
``` json
    "server:dev": "node ./server/start"
```
- Change server, and add "page" renderer.  Add console.logs:

``` javascript
const Hapi = require('hapi')
const talks = require('./data')
const pages = require('./pages')

import React from 'react'
import {renderToString, renderToStaticMarkup} from 'react-dom/server'
import TalkList from '../client/TalkList'

const server = new Hapi.Server()
server.connection({port: 4001})

server.route({
  method: 'GET',
  path: '/api/talks',
  handler: (req, reply) => {
    console.log('Called GET TALKS"')
    reply(talks)
  }
})

server.route({
  method: 'GET',
  path: '/api/talk/{id}',
  handler: (req, reply) => {
    const id = Number(req.params.id)
    console.log('Called GET TALK WITH ID', id)
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

// SSR
server.route({
  method: 'GET',
  path:'/ssr',
  handler: (request, reply) => {
    reply(pages.index(renderToString(<TalkList initialState={{talks}}/>), talks))
  }
})

server.start(function () {
    console.log(`Server running at port: ${server.info.port}`)
})

```

- Add `server/pages.js` for HTML templating. Note that we set `window.__PRELOADED_STATE__`

``` javascript
exports.index = (renderedApp, preloadedState) => {
    return (
      `<!DOCTYPE html>
      <html>
        <head>
          <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
          <title>Universal React Workshop</title>
          <script>
            window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState)}
          </script>
          <!-- Latest compiled and minified CSS -->
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css">
        </head>
        <body>
          <div class="jumbotron">
            <h1 class="text-center">Conference Talks! From Server!</h1>
            <div class="container" id="container"><div>${renderedApp}</div></div>
          </div>
          <script src="/static/bundle.js"></script>
        </body>
      </html>`
    )
}

```
- Change `TalkList` to support correct init in both cases:

``` javascript
import React from 'react'
import Talk from './Talk.jsx'
import axios from 'axios'

const TalkList = React.createClass({

  getInitialState: function () {
    console.log("GET_INITIAL_STATE")
    // We mus setup the state we used to render on server
    if (typeof __PRELOADED_STATE__ !== 'undefined') {
      // Client side
      return {
        talks:__PRELOADED_STATE__ // initial state
      }
    } else {
      // Server side
      return {
        talks: this.props.initialState ? this.props.initialState.talks : []
      }
    }
  },

  // Not needed anymore...it's only for comparing
  componentDidMount: function () {
    if (typeof __PRELOADED_STATE__ === 'undefined') {
      axios.get('/api/talks')
        .then(res => {
          this.setState({talks: res.data})
      })
    }
  },

  handleVote: function (talkId) {
    axios.post('/api/talk/vote', {id: talkId})
      .then( () => axios.get('/api/talks'))
      .then(res => {
        this.setState({talks: res.data})
      })
  },

  render: function () {
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
    return (<div>{talks}</div>)
  }
})

export default TalkList
```
- Proxy: we use a separate endpoint (so we can check the difference):
``` javascript
proxy: {
  '/api': 'http://localhost:4001',
  '/ssr': 'http://localhost:4001'
  }
```
- Routing:  aggiungere la route:
``` javascript
  <Route path='/ssr' component={TalkList} />
```
-  Testare con un browser non-js:
  - lynx http://127.0.0.1:4000/ssr
  - curl http://127.0.0.1:4000/ssr >> test.html
