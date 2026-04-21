# Búsqueda geográfica de complejos

## Objetivo
Encontrar complejos deportivos cercanos a unas coordenadas dadas y ordenar resultados por distancia.

## Endpoint base
- `GET /complexes/nearby?lat={lat}&lon={lon}`

## Reglas
1. Cada complejo debe tener latitude y longitude.
2. La distancia se calcula con fórmula de Haversine.
3. Los complejos se ordenan de menor a mayor distancia.
4. En una segunda fase se combinará con disponibilidad por fecha y hora.

## Respuesta esperada
- id
- name
- address
- latitude
- longitude
- distanceKm
- amenities
