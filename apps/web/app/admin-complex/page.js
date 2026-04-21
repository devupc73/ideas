export default function AdminComplexPage(){
  return (
    <main style={{padding:40,fontFamily:'Arial'}}>
      <h1>Administrador de Complejo</h1>
      <p>Panel principal para gestionar complejo, canchas, horarios y reservas.</p>

      <ul>
        <li><a href="/admin-complex/complex">Datos del complejo</a></li>
        <li><a href="/admin-complex/courts">Canchas</a></li>
        <li><a href="/admin-complex/schedule">Horarios</a></li>
        <li><a href="/admin-complex/reservations">Reservas</a></li>
      </ul>
    </main>
  )
}
