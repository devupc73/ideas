const store = new Map()

function generate(){
  return Math.floor(100000 + Math.random()*900000).toString()
}

function request(phone){
  const code = generate()
  const exp = Date.now()+300000
  store.set(phone,{code,exp})
  console.log('OTP',phone,code)
  return code
}

function verify(phone,code){
  const e = store.get(phone)
  if(!e) return false
  if(Date.now()>e.exp) return false
  return e.code===code
}

module.exports={request,verify}
