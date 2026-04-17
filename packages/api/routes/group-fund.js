async function routes(fastify){

  fastify.get('/groups/:id/fund', async (req)=>{

    const { id } = req.params

    // MVP mock response until DB wiring
    return {
      groupId: id,
      balance: 0,
      movements: []
    }

  })

}

module.exports = routes
