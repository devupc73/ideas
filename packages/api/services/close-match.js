async function closeMatch(prisma,{matchId,cost}){

 const payments = await prisma.participation.findMany({
  where:{matchId,paid:true}
 })

 const total = payments.length

 const totalCollected = total * cost

 const surplus = totalCollected - cost

 if(surplus>0){
  await prisma.groupFundMovement.create({
   data:{
    matchId,
    type:'surplus_in',
    amount:surplus,
    description:'excedente partido'
   }
  })
 }

 return {
  totalPlayers:total,
  surplus
 }

}

module.exports={closeMatch}
