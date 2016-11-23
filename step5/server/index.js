const Hapi = require('hapi')
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

server.start(() => {
  console.log(`Server running at: ${ server.info.uri }`)
})
