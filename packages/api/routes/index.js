const getMatch = require('./get-match')
const groupFund = require('./group-fund')

async function routes(fastify){

  fastify.register(getMatch)
  fastify.register(groupFund)

}

module.exports = routes
