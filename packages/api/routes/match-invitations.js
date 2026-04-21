const {invitePlayers,respondInvitation}=require('../services/match-invitations')

async function routes(fastify){

 fastify.post('/matches/:id/invite',async(req)=>{

  const matchId=req.params.id
  const {players}=req.body

  const invitations=invitePlayers({matchId,players})

  return {
   matchId,
   invitations
  }

 })

 fastify.post('/matches/:id/respond',async(req)=>{

  const {invitation,status}=req.body

  const updated=respondInvitation({invitation,status})

  return updated

 })

}

module.exports=routes
