const {joinMatch} = require('../services/join-match')

async function routes(fastify){

 fastify.post('/matches/:id/join', async (req)=>{

   const {userId, paid, players} = req.body

   const player = joinMatch({players,userId,paid})

   return {
     success:true,
     player
   }

 })

}

module.exports = routes
