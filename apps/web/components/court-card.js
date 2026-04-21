export default function CourtCard({court}){

  return (
    <div style={{border:'1px solid #ccc',borderRadius:12,padding:16}}>

      <h3>{court.complexName}</h3>

      <p><b>Cancha:</b> {court.courtName}</p>
      <p><b>Deporte:</b> {court.sportType}</p>
      <p><b>Distancia:</b> {court.distanceKm} km</p>
      <p><b>Horario:</b> {court.startTime} - {court.endTime}</p>

      <button style={{padding:'10px 14px'}}>Reservar</button>

    </div>
  )

}
