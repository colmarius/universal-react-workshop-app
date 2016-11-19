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
