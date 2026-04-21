const {searchCourts}=require('../services/court-search')

async function routes(fastify){

 fastify.get('/courts/search',async(req)=>{

  const {lat,lon,time,sport}=req.query

  const complexes=[
   {
    id:'1',
    name:'Complejo Surco',
    latitude:-12.13,
    longitude:-76.99,
    amenities:['parking'],
    courts:[
     {id:'c1',name:'Cancha 1',sportType:'football'}
    ]
   },
   {
    id:'2',
    name:'Complejo La Molina',
    latitude:-12.08,
    longitude:-76.94,
    amenities:['parking','locker_rooms'],
    courts:[
     {id:'c2',name:'Cancha A',sportType:'football'}
    ]
   }
  ]

  const results=searchCourts({
   complexes,
   lat:Number(lat),
   lon:Number(lon),
   sport,
   time
  })

  return results

 })

}

module.exports=routes
