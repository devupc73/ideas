function roleCount(team, role){
 return team.filter(p=>p.preferredPosition===role).length
}

function teamScore(team){
 return team.reduce((sum,p)=>sum + (p.skillLevel||1)*10,0)
}

function avgAge(team){
 if(team.length===0) return 0
 return team.reduce((s,p)=>s+(p.age||30),0)/team.length
}

function assignPlayer(player, teamA, teamB){

 const scoreA = teamScore(teamA)
 const scoreB = teamScore(teamB)

 if(scoreA <= scoreB){
   teamA.push(player)
 }else{
   teamB.push(player)
 }

}

function intelligentDraw(players){

 const eligible = players
  .filter(p=>p.paid && p.status==='confirmed')
  .sort((a,b)=>b.skillLevel-a.skillLevel)

 const teamA=[]
 const teamB=[]

 for(const p of eligible){

   if(teamA.length===9){
     teamB.push(p)
     continue
   }

   if(teamB.length===9){
     teamA.push(p)
     continue
   }

   assignPlayer(p,teamA,teamB)
 }

 return {
  teamA,
  teamB,
  metrics:{
    scoreA:teamScore(teamA),
    scoreB:teamScore(teamB),
    avgAgeA:avgAge(teamA),
    avgAgeB:avgAge(teamB)
  }
 }

}

module.exports={intelligentDraw}
