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
