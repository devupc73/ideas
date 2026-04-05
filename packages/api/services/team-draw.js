// Balanced team draw

function drawBalanced(players, capacity){

  const confirmed = players.filter(p=>p.paid)

  const playing = confirmed.slice(0,capacity)
  const waiting = confirmed.slice(capacity)

  // sort by skill
  playing.sort((a,b)=>b.skillLevel-a.skillLevel)

  const teamA=[]
  const teamB=[]

  let skillA=0
  let skillB=0

  for(const p of playing){

    if(skillA<=skillB){
      teamA.push(p)
      skillA+=p.skillLevel
    }else{
      teamB.push(p)
      skillB+=p.skillLevel
    }

  }

  return {
    teamA,
    teamB,
    waiting,
    skillA,
    skillB
  }

}

module.exports={drawBalanced}
