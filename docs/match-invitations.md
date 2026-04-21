# Invitación de jugadores al partido

## Objetivo
Permitir que, una vez creado un partido, el sistema genere invitaciones para los miembros del grupo y habilite su confirmación.

## Flujo
1. Se crea el partido.
2. El capitán dispara el envío de invitaciones.
3. Cada invitación queda asociada a un jugador y a un match.
4. El jugador confirma participación y luego registra el pago.

## Entidad sugerida: MatchInvitation
- id
- matchId
- userId
- phone
- status
- sentAt
- respondedAt

## Status posibles
- pending
- sent
- accepted
- declined

## Endpoints
- `POST /matches/:id/invite`
- `POST /matches/:id/respond`
- `GET /matches/:id/invitations`
