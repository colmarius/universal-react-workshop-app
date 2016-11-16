const Hapi = require('hapi')
const data = require('./data')

const server = new Hapi.Server()
server.connection({port: 4001})

server.route({
  method: 'GET',
  path: '/api/talks',
  handler: (req, reply) => {
    reply(data)
  }
})

server.route({
  method: 'GET',
  path: '/api/talk/{id}',
  handler: (req, reply) => {
    const id = Number(req.params.id)
    const talk = data.find(el => el.id === id)
    reply(talk)
  }
})

server.start(function () {
    console.log(`Server running at port: ${server.info.port}`)
})
