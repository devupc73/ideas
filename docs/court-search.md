# Búsqueda de cancha disponible

## Objetivo
Encontrar canchas disponibles según ubicación, deporte, fecha y hora.

## Endpoint
- `GET /courts/search?lat={lat}&lon={lon}&date={date}&time={time}&sport={sport}`

## Flujo
1. Obtener complejos cercanos al usuario.
2. Filtrar canchas por deporte.
3. Consultar disponibilidad por fecha y hora.
4. Devolver resultados ordenados por distancia.

## Respuesta esperada
- complexId
- complexName
- courtId
- courtName
- sportType
- distanceKm
- available
- startTime
- endTime
- amenities
