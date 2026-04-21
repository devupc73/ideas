const {generateSlots,markReservations,markBlocked}=require('../services/availability-engine')

async function routes(fastify){

 fastify.get('/courts/:id/availability',async(req)=>{

   const {date}=req.query

   const schedule={
     startTime:'18:00',
     endTime:'23:00',
     slotDurationMinutes:60
   }

   const reservations=[]

   const blocked=[]

   let slots=generateSlots(
     schedule.startTime,
     schedule.endTime,
     schedule.slotDurationMinutes
   )

   slots=markReservations(slots,reservations)

   slots=markBlocked(slots,blocked)

   return {
     date,
     slots
   }

 })

}

module.exports=routes
