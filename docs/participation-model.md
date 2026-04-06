# Participation model (MVP)

## Chosen model: robust participation

Each player's participation in a match should store:
- matchId
- userId
- paid
- status
- position
- team
- joinedAt
- paymentId

## Status values
- confirmed
- waiting_list
- removed

## Rules
1. Capacity for current pilot is 18.
2. If confirmed players are fewer than 18, new paid player becomes `confirmed`.
3. If confirmed players are already 18, new player becomes `waiting_list`.
4. Waiting list order is controlled by `position` and `joinedAt`.
5. If a confirmed player leaves, first waiting player is promoted.
