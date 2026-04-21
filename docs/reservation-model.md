# Modelo de Reservas

## Objetivo
Conectar complejos, canchas, horarios y grupos de juego mediante una entidad de reserva.

## Entidad: Reservation
- id
- courtId
- groupId
- date
- startTime
- endTime
- status
- paymentStatus
- createdAt
- updatedAt

## Status posibles
- pending
- confirmed
- cancelled
- blocked

## PaymentStatus posibles
- unpaid
- partially_paid
- paid

## Reglas
1. Una reserva se asocia a una cancha específica.
2. Una reserva se asocia a un grupo de juego.
3. No puede existir traslape de reservas confirmadas en la misma cancha y horario.
4. Un horario bloqueado por el complejo debe impedir nuevas reservas.
5. La reserva confirmada puede ser la base de un partido del grupo.
