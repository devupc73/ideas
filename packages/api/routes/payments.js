const payment = require('../services/payment-session')

async function routes(fastify){

  fastify.post('/payments/create-session', async (req)=>{

    const {amount,currency,matchId,userId} = req.body

    const session = payment.createPaymentSession({amount,currency,matchId,userId})

    return session

  })

}

module.exports = routes
