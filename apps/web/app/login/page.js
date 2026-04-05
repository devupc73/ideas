"use client"
import {useState} from 'react'

export default function Login(){

 const [phone,setPhone]=useState("")
 const [code,setCode]=useState("")

 async function request(){
   await fetch('http://localhost:3000/auth/request-code',{
     method:'POST',
     headers:{'Content-Type':'application/json'},
     body:JSON.stringify({phone})
   })
   alert('Código enviado (revisar consola backend)')
 }

 async function verify(){
   const r = await fetch('http://localhost:3000/auth/verify-code',{
     method:'POST',
     headers:{'Content-Type':'application/json'},
     body:JSON.stringify({phone,code})
   })

   const data = await r.json()

   if(data.success) alert('Login OK')
   else alert('Código inválido')
 }

 return (
  <main style={{padding:40}}>
    <h2>Login por teléfono</h2>

    <input
      placeholder="telefono"
      value={phone}
      onChange={e=>setPhone(e.target.value)}
    />

    <button onClick={request}>Solicitar código</button>

    <br/><br/>

    <input
      placeholder="codigo"
      value={code}
      onChange={e=>setCode(e.target.value)}
    />

    <button onClick={verify}>Verificar</button>

  </main>
 )
}
