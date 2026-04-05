const otp = require('../lib/phone-otp')

async function routes(fastify){

  fastify.post('/auth/request-code', async (req)=>{
    const {phone} = req.body
    const code = otp.request(phone)
    return {sent:true}
  })

  fastify.post('/auth/verify-code', async (req)=>{
    const {phone,code} = req.body

    const ok = otp.verify(phone,code)

    if(!ok){
      return {success:false}
    }

    return {success:true}
  })

}

module.exports = routes
