# Backend roadmap (current phase)

## Goal
Make the MVP runnable end-to-end with real persistence.

## Current priorities
1. Evolve Prisma schema for robust Participation model.
2. Persist join flow to database.
3. Persist payment status to database.
4. Persist draw results into `team` field for each participation.
5. Expose routes through the main Fastify app.

## Immediate endpoints
- POST /matches/:id/join
- POST /matches/:id/pay
- POST /matches/:id/draw
- GET /matches/:id

## Data model updates
Participation should include:
- status
- paid
- team
- position
- joinedAt
- paymentId
- skillLevel snapshot (optional future)
