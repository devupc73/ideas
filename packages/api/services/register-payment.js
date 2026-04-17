async function registerPayment(prisma,{matchId,userId,method,reference}){

 const participation = await prisma.participation.findFirst({
  where:{matchId,userId}
 })

 if(!participation){
  throw new Error('participation not found')
 }

 await prisma.participation.update({
  where:{id:participation.id},
  data:{
   paid:true,
   paymentMethod:method,
   paymentReference:reference
  }
 })

 return {success:true}
}

module.exports={registerPayment}
