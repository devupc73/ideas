function createReservation({courtId,groupId,date,startTime,endTime}){

 return {
  id:"res_"+Date.now(),
  courtId,
  groupId,
  date,
  startTime,
  endTime,
  status:"confirmed"
 }

}

function createMatchFromReservation({reservation,sportType,capacity}){

 return {
  id:"match_"+Date.now(),
  reservationId:reservation.id,
  groupId:reservation.groupId,
  date:reservation.date,
  startTime:reservation.startTime,
  endTime:reservation.endTime,
  sportType,
  capacity,
  players:[]
 }

}

function reserveAndCreateMatch(payload){

 const reservation=createReservation(payload)

 const match=createMatchFromReservation({
  reservation,
  sportType:payload.sportType,
  capacity:payload.capacity
 })

 return {
  reservation,
  match,
  nextStep:"invite_players"
 }

}

module.exports={
 reserveAndCreateMatch
}
