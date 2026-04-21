function createInvitation({matchId,userId,phone}){

 return {
  id:"inv_"+Date.now()+"_"+Math.floor(Math.random()*1000),
  matchId,
  userId,
  phone,
  status:"sent",
  sentAt:new Date().toISOString()
 }

}

function invitePlayers({matchId,players}){

 const invitations = players.map(p=>createInvitation({
  matchId,
  userId:p.userId,
  phone:p.phone
 }))

 return invitations

}

function respondInvitation({invitation,status}){

 return {
  ...invitation,
  status,
  respondedAt:new Date().toISOString()
 }

}

module.exports={
 invitePlayers,
 respondInvitation
}
