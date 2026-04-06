const CAPACITY = 18

function joinMatch({players, userId, paid}){

 const confirmed = players.filter(p=>p.status==='confirmed')
 const waiting = players.filter(p=>p.status==='waiting_list')

 const newPlayer = {
  userId,
  paid,
  joinedAt: new Date(),
 }

 if(confirmed.length < CAPACITY && paid){

   newPlayer.status = 'confirmed'
   newPlayer.position = confirmed.length + 1

 }else{

   newPlayer.status = 'waiting_list'
   newPlayer.position = waiting.length + 1

 }

 return newPlayer

}

module.exports = {joinMatch}
