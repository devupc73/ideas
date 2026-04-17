const Fastify = require('fastify')
const authRoutes = require('./routes/auth-phone')
const paymentRoutes = require('./routes/payments')
const joinRoutes = require('./routes/join-match')
const drawRoutes = require('./routes/draw-teams')
const captainRoutes = require('./routes/captain-actions')

const app = Fastify({logger:true})

app.register(authRoutes)
app.register(paymentRoutes)
app.register(joinRoutes)
app.register(drawRoutes)
app.register(captainRoutes)

app.get('/health', async ()=>({status:'ok'}))

const start = async ()=>{
 try{
  await app.listen({port:3000,host:'0.0.0.0'})
 }catch(err){
  app.log.error(err)
  process.exit(1)
 }
}

start()
