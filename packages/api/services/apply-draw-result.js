function applyDrawResult(players, drawResult){

 const updated=[]

 drawResult.teamA.forEach(p=>{
  updated.push({...p,team:'A'})
 })

 drawResult.teamB.forEach(p=>{
  updated.push({...p,team:'B'})
 })

 return updated

}

module.exports={applyDrawResult}
