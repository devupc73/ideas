const captain = require('../services/captain-actions')

async function routes(fastify){

 fastify.post('/captain/start-draw', async (req)=>{

   const {role} = req.body

   if(!captain.canStartDraw(role)){
     return {error:'not authorized'}
   }

   return {ok:true}

 })

 fastify.post('/captain/confirm-payment', async (req)=>{

   const {role} = req.body

   if(!captain.canConfirmPayment(role)){
     return {error:'not authorized'}
   }

   return {ok:true}

 })

}

module.exports = routes
