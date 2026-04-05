const draw = require('../services/team-draw')

async function routes(fastify){

  fastify.post('/matches/:id/draw', async (req)=>{

    const {players,capacity} = req.body

    const result = draw.drawBalanced(players,capacity)

    return result

  })

}

module.exports = routes
