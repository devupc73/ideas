const {intelligentDraw} = require('../services/intelligent-draw')

async function routes(fastify){

 fastify.post('/matches/:id/draw', async (req)=>{

   const {players} = req.body

   const result = intelligentDraw(players)

   return {
     success:true,
     ...result
   }

 })

}

module.exports = routes
