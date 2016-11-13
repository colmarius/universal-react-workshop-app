const Hapi = require('hapi')
const server = new Hapi.Server()

server.connection({port: 3001})

server.route({
  method: 'GET',
  path: '/api/talks',
  handler: (req, reply) => {
    reply('called talks')
  }
})

server.route({
  method: 'GET',
  path: '/api/talk/{id}',
  handler: (req, reply) => {
    const id = req.params.id
    reply(`called talk with id: ${id}`)
  }
})

server.start(function () { // start the Hapi server on your localhost
  console.log(`Server running at port: ${server.info.port}`)
})
