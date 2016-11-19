# Step 7

## Description
Add Redux, both client side and server side.

## How-to
- Add redux: `npm i redux react-redux redux-thunk --save`
- Add `client/reducers.js`:

``` javascript
const reducer = (state = [], action) => {
  switch (action.type) {
    case 'TALKS_UPDATED':
      return action.talks // In this case we repalce the whole state
    default:
      return state
  }
}
export default reducer
```
- Add `client/actions.js`:

``` javascript
import axios from 'axios'
export const TALKS_UPDATED = 'TALKS_UPDATED'

// Do the vote, reload  talks from server
// then return the TALKS_UPDATED action
export function vote(id) {
  return dispatch =>
    axios.post('/api/talk/vote', {id}).then(dispatch(loadData()))
}

export function loadData() {
  return dispatch =>
    axios.get('/api/talks')
      .then(res => dispatch(talksUpdated(res.data))) // we should manage errors...
}

function talksUpdated(talks) {
  return {
    type: TALKS_UPDATED,
    talks
  }
}
```

- Change `index,js` to create the store, considering the two different cases (client / server rendered):

``` javascript
import {render} from 'react-dom'
import React from 'react'
import Bootstrap from 'bootstrap/dist/css/bootstrap.css'
import App from "./App.jsx"

import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import reducers from './reducers'
import thunk from 'redux-thunk'

import {loadData} from './actions'

let store
if (typeof window.__PRELOADED_STATE__ !== 'undefined') {
  store = createStore(reducers, window.__PRELOADED_STATE__, applyMiddleware(thunk))
} else {
  // ...no preloaded state...dispatch the load action!
  store = createStore(reducers, applyMiddleware(thunk))
  store.dispatch(loadData())
}

render(<Provider store={store}>
         <App />
       </Provider>,
  document.getElementById("container"))
```
- Refactor TalkList, removing state / wrapping with redux:

``` javascript
import React from 'react'
import Talk from './Talk.jsx'
import {connect} from 'react-redux'
import {loadData, vote} from './actions'

const TalkList = React.createClass({

  render: function () { // We should not access state directly anymore!

    const talks = this.props.talks.map(talk => {
      return (
        <Talk
          key={'talk-' + talk.id} // used by React
          id={talk.id}
          name={talk.name}
          author={talk.author}
          short={talk.short}
          votes={talk.votes}
          onVote={this.props.handleVote} // changed, we get the function from props
        ></Talk>
      )
    })
    return (<div>{talks}</div>)
  }
})

const mapStateToProps = (state) => {
  return {
    talks: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleVote: (id) => {
      dispatch(vote(id))
    }
  }
}

// Connect Redux state to props and handlers
const TalkListRedux = connect(mapStateToProps, mapDispatchToProps)(TalkList)

export default TalkListRedux
```
- Test Client side rendering
- Change `server/index.js` SSR:

```javascript
const Hapi = require('hapi')
const talks = require('./data')
const pages = require('./pages')

import React from 'react'
import {renderToString, renderToStaticMarkup} from 'react-dom/server'
import TalkList from '../client/TalkList'

import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducers from '../client/reducers'

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
    console.log('ADDING VOTE TO TALK WITH ID', id)
    const talk = talks.find(el => el.id === id)
    talk.votes++
    reply(talks)
  }
})

// SSR!!!!
server.route({
  method: 'GET',
  path:'/ssr',
  handler: (request, reply) => {
    const store = createStore(reducers, talks)
    const comp = renderToString(
       <Provider store={store}>
          <TalkList/>
       </Provider>)
    reply(pages.index(comp, talks))
  }
})

server.start(function () {
    console.log(`Server running at port: ${server.info.port}`)
})
```
- Test SSR
