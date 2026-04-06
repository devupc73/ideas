# Intelligent team draw (MVP)

## Goal
Create two balanced teams for the weekly 9v9 match.

## Inputs per player
- skillLevel: 1..5
- preferredPosition: gk | def | mid | fwd
- age: integer
- paid: boolean
- status: confirmed | waiting_list | removed

## Rules
1. Only players with `paid=true` and `status=confirmed` enter the draw.
2. Maximum players in current pilot: 18.
3. Teams must end with 9 players each.
4. Sort priority is by skillLevel descending.
5. The next player is assigned to the team with lower weighted score.
6. Weighted score uses:
   - skillLevel * 10
   - position balance bonus/penalty
   - age light balancing factor

## Position balancing
The engine tries to avoid concentration of the same role in one team.
Preferred target per team for 9v9:
- gk: 1
- def: 3
- mid: 3
- fwd: 2

## Output
- teamA
- teamB
- metrics
  - scoreA
  - scoreB
  - avgAgeA
  - avgAgeB
  - roleCountsA
  - roleCountsB
