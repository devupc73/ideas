// Persist draw results into participation records

async function persistDraw(prisma, matchId, teamA, teamB){

  for(const p of teamA){

    await prisma.participation.updateMany({
      where:{
        matchId,
        userId:p.userId
      },
      data:{
        team:'A'
      }
    })

  }

  for(const p of teamB){

    await prisma.participation.updateMany({
      where:{
        matchId,
        userId:p.userId
      },
      data:{
        team:'B'
      }
    })

  }

}

module.exports={persistDraw}
