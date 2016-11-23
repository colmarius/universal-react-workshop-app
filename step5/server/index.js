const Hapi = require('hapi')
const Inert = require('inert')
const Vision = require('vision')
const HapiSwagger = require('hapi-swagger')
const talks = require('./data')

const server = new Hapi.Server()
server.connection({
  host: 'localhost',
  port: 4001,
})

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
    const talk = talks.find((talk) => talk.id === id)
    reply(talk)
  }
})

server.route({
  method: 'POST',
  path: '/api/talk/vote',
  handler: (req, reply) => {
    const id = req.payload.id
    const talk = talks.find(talk => talk.id === id)
    talk.votes++
    reply(talks)
  }
})

const options = {
  info: {
    'title': 'Test API Documentation',
    'version': 1,
  }
}

server.register(
  [
    Inert,
    Vision,
    {
      'register': HapiSwagger,
      'options': options
    }
  ],
  (err) => {
    server.start((err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Server running at:', server.info.uri);
      }
    });
  }
);
