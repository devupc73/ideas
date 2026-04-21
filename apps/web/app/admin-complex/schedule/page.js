export default function SchedulePage(){
  return (
    <main style={{padding:40,fontFamily:'Arial'}}>
      <h1>Configuración de Horarios</h1>

      <p>Define horarios disponibles para cada cancha.</p>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Cancha</th>
            <th>Día</th>
            <th>Inicio</th>
            <th>Fin</th>
            <th>Duración slot</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Cancha 1</td>
            <td>Miércoles</td>
            <td>18:00</td>
            <td>23:00</td>
            <td>60 min</td>
          </tr>
        </tbody>
      </table>

    </main>
  )
}
