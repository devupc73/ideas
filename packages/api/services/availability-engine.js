function generateSlots(startTime,endTime,slotMinutes){

 const slots=[]

 let current=startTime

 while(current<endTime){

   const [h,m]=current.split(':').map(Number)

   const nextMinutes=h*60+m+slotMinutes

   const nextH=Math.floor(nextMinutes/60)
   const nextM=nextMinutes%60

   const next=`${String(nextH).padStart(2,'0')}:${String(nextM).padStart(2,'0')}`

   slots.push({
     start:current,
     end:next,
     status:'available'
   })

   current=next

 }

 return slots

}

function markReservations(slots,reservations){

 reservations.forEach(r=>{

   slots.forEach(s=>{

     if(s.start===r.startTime){
       s.status='reserved'
     }

   })

 })

 return slots

}

function markBlocked(slots,blocked){

 blocked.forEach(b=>{

   slots.forEach(s=>{

     if(s.start===b.startTime){
       s.status='blocked'
     }

   })

 })

 return slots

}

module.exports={
 generateSlots,
 markReservations,
 markBlocked
}
