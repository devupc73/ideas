async function routes(fastify){

  fastify.get('/matches/:id', async (req)=>{
    const { id } = req.params

    // MVP mock response until Prisma wiring is completed
    return {
      match: {
        id,
        day: 'wednesday',
        time: '22:00',
        modality: '9v9',
        capacity: 18,
        pricePerPlayer: 18
      },
      confirmed: [],
      waitingList: [],
      teams: {
        teamA: [],
        teamB: []
      }
    }
  })

}

module.exports = routes
