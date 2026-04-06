const {intelligentDraw} = require('../services/intelligent-draw')
const {applyDrawResult} = require('../services/apply-draw-result')

async function routes(fastify){

 fastify.post('/matches/:id/draw/apply', async (req)=>{

   const {players} = req.body

   const result = intelligentDraw(players)

   const updatedPlayers = applyDrawResult(players,result)

   return {
     success:true,
     teamA:result.teamA,
     teamB:result.teamB,
     updatedPlayers
   }

 })

}

module.exports = routes
