# Flujo automático: reserva → partido → inscripción

## Objetivo
Cuando un grupo reserva una cancha, el sistema debe crear automáticamente el partido asociado y dejar abierta la inscripción de jugadores.

## Flujo
1. El usuario selecciona una cancha disponible.
2. Se crea una `Reservation`.
3. Se crea un `Match` asociado al grupo.
4. El match hereda fecha, hora, modalidad y capacidad de la reserva/cancha.
5. El grupo queda habilitado para invitar jugadores y registrar pagos.

## Endpoint propuesto
- `POST /booking-flow/reserve-and-create-match`

## Entrada esperada
- courtId
- groupId
- date
- startTime
- endTime
- sportType
- capacity

## Salida esperada
- reservation
- match
- nextStep: invite_players
