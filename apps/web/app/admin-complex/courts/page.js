export default function CourtsPage(){
  return (
    <main style={{padding:40,fontFamily:'Arial'}}>
      <h1>Canchas del Complejo</h1>

      <button>Agregar nueva cancha</button>

      <table border="1" cellPadding="10" style={{marginTop:20}}>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Deporte</th>
            <th>Capacidad</th>
            <th>Tipo superficie</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Cancha 1</td>
            <td>Football</td>
            <td>9 vs 9</td>
            <td>Sintético</td>
          </tr>
        </tbody>
      </table>
    </main>
  )
}
