"use client"

import { useState } from 'react'

export default function SearchPage(){
  const [sport,setSport] = useState('football')
  const [time,setTime] = useState('22:00')
  const [date,setDate] = useState('2026-05-01')
  const [results,setResults] = useState([])

  async function search(){
    const r = await fetch(`http://localhost:3000/courts/search?lat=-12.08&lon=-76.94&time=${time}&sport=${sport}&date=${date}`)
    const data = await r.json()
    setResults(data)
  }

  return (
    <main style={{padding:40,fontFamily:'Arial'}}>
      <h1>Buscar cancha</h1>
      <p>Encuentra una cancha disponible cerca de ti.</p>

      <div style={{display:'grid',gap:12,maxWidth:420,marginBottom:24}}>
        <select value={sport} onChange={e=>setSport(e.target.value)}>
          <option value="football">Fútbol</option>
          <option value="padel">Pádel</option>
          <option value="tennis">Tenis</option>
          <option value="basketball">Basket</option>
          <option value="volleyball">Vóley</option>
        </select>

        <input value={date} onChange={e=>setDate(e.target.value)} placeholder="fecha" />
        <input value={time} onChange={e=>setTime(e.target.value)} placeholder="hora" />

        <button onClick={search} style={{padding:'12px 16px',fontSize:16}}>Buscar</button>
      </div>

      <section style={{display:'grid',gap:16}}>
        {results.map((item)=> (
          <div key={item.courtId} style={{border:'1px solid #ccc',borderRadius:12,padding:16}}>
            <h3 style={{marginTop:0}}>{item.complexName}</h3>
            <p><b>Cancha:</b> {item.courtName}</p>
            <p><b>Deporte:</b> {item.sportType}</p>
            <p><b>Distancia:</b> {item.distanceKm.toFixed ? item.distanceKm.toFixed(2) : item.distanceKm} km</p>
            <p><b>Horario:</b> {item.startTime} - {item.endTime}</p>
            <p><b>Disponible:</b> {item.available ? 'Sí' : 'No'}</p>
            <p><b>Amenidades:</b> {(item.amenities || []).join(', ')}</p>
            <button style={{padding:'12px 16px',fontSize:16}}>Reservar</button>
          </div>
        ))}
      </section>
    </main>
  )
}
