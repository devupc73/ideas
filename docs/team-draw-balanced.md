# Sorteo equilibrado de equipos (MVP)

## Objetivo
Armar dos equipos balanceados usando nivel de habilidad por jugador.

## Regla base
Cada jugador tendrá un `skillLevel` entre 1 y 5.

## Flujo
1. Tomar solo jugadores pagados.
2. Ordenarlos por skill descendente.
3. Asignar cada jugador al equipo con menor skill acumulado.
4. Si se supera la capacidad, el resto pasa a lista de espera.

## Capacidad por modalidad
- 6v6 => 12 jugadores
- 7v7 => 14 jugadores
- 9v9 => 18 jugadores

## Resultado esperado
- teamA
- teamB
- waitingList
- totalSkillA
- totalSkillB
