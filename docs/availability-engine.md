# Motor de disponibilidad de canchas

## Objetivo
Calcular los horarios disponibles, reservados y bloqueados de una cancha para una fecha dada.

## Entradas
- courtId
- date
- scheduleConfig (CourtSchedule)
- reservations[]
- blockedSlots[]

## Salida
Lista de slots con estado:
- available
- reserved
- blocked

## Reglas
1. Los slots se generan a partir de CourtSchedule.
2. Un slot reservado prevalece sobre available.
3. Un slot bloqueado prevalece sobre available.
4. Si un slot está bloqueado, no puede reservarse.
5. Si un slot está reservado, no puede duplicarse.
