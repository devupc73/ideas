const {sortByDistance}=require('./geo-search')
const {generateSlots}=require('./availability-engine')

function searchCourts({complexes,lat,lon,sport,time}){

 const nearby=sortByDistance(complexes,lat,lon)

 const results=[]

 nearby.forEach(c=>{

  c.courts
   .filter(court=>court.sportType===sport)
   .forEach(court=>{

     const slots=generateSlots('18:00','23:00',60)

     const slot=slots.find(s=>s.start===time)

     results.push({
      complexId:c.id,
      complexName:c.name,
      courtId:court.id,
      courtName:court.name,
      sportType:court.sportType,
      distanceKm:c.distanceKm,
      available:slot?true:false,
      startTime:slot?slot.start:null,
      endTime:slot?slot.end:null,
      amenities:c.amenities
     })

   })

 })

 return results

}

module.exports={
 searchCourts
}
