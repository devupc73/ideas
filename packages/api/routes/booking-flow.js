const {reserveAndCreateMatch}=require('../services/booking-flow')

async function routes(fastify){

 fastify.post('/booking-flow/reserve-and-create-match',async(req)=>{

  const {
   courtId,
   groupId,
   date,
   startTime,
   endTime,
   sportType,
   capacity
  }=req.body

  const result=reserveAndCreateMatch({
   courtId,
   groupId,
   date,
   startTime,
   endTime,
   sportType,
   capacity
  })

  return result

 })

}

module.exports=routes
