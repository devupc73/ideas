export default function ReservationsPage(){
  return (
    <main style={{padding:40,fontFamily:'Arial'}}>

      <h1>Reservas del Complejo</h1>

      <table border="1" cellPadding="10">

        <thead>
          <tr>
            <th>Fecha</th>
            <th>Hora</th>
            <th>Cancha</th>
            <th>Grupo</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>2026-05-01</td>
            <td>22:00</td>
            <td>Cancha 1</td>
            <td>Grupo Miércoles</td>
            <td>Confirmada</td>
          </tr>
        </tbody>

      </table>

    </main>
  )
}
