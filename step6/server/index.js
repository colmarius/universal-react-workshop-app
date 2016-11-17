const Hapi = require('hapi')
const talks = require('./data')
const pages = require('./pages')

import React from 'react'
import {renderToString} from 'react-dom/server'
import App from '../client/App'

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

server.route({
  method: 'GET',
  path:'/api/talk-list',
  handler: (request, reply) => {
    reply(pages.index(renderToString(<App/>)))
  }
})

server.start(function () {
    console.log(`Server running at port: ${server.info.port}`)
})
