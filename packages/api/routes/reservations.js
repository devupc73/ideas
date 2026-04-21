async function routes(fastify){

 fastify.post('/reservations',async(req)=>{

   const {
     courtId,
     groupId,
     date,
     startTime,
     endTime
   }=req.body

   return {
     success:true,
     reservation:{
       courtId,
       groupId,
       date,
       startTime,
       endTime,
       status:'pending'
     }
   }

 })

}

module.exports=routes
