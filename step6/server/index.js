const Hapi = require('hapi')
const talks = require('./data')
const pages = require('./pages')

import React from 'react'
import {renderToString, renderToStaticMarkup} from 'react-dom/server'
import TalkList from '../client/TalkList'

const server = new Hapi.Server()
server.connection({port: 4001})

const __CLIENT__ = false // for debugging

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

// SSR!!!!
server.route({
  method: 'GET',
  path:'/ssr',
  handler: (request, reply) => {
    console.log("renderToString(<TalkList initialState={{talks}}/>)", renderToString(<TalkList initialState={{talks}}/>))
    reply(pages.index(renderToString(<TalkList initialState={{talks}}/>), talks))
  }
})

server.start(function () {
    console.log(`Server running at port: ${server.info.port}`)
})
