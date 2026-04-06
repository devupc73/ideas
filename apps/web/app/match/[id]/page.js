"use client"

import {useState} from 'react'

export default function MatchPage(){

 const [players,setPlayers] = useState([])

 return (

  <main style={{padding:40,fontFamily:'Arial'}}>

    <h1>Partido Miércoles 22:00</h1>
    <p>Modalidad 9 vs 9</p>
    <p>Cupos: 18</p>

    <h3>Jugadores confirmados</h3>

    <ul>
      {players.map(p=>(
        <li key={p.id}>{p.name}</li>
      ))}
    </ul>

    <button>Me apunto</button>
    <button>Pagar</button>
    <button>Hacer sorteo</button>

  </main>

 )
}
