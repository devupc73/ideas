# Modelo de datos: Complejo, Canchas y Horarios

## Objetivo
Permitir que un administrador general gestione múltiples complejos deportivos y asigne administradores a cada complejo. Cada complejo puede tener múltiples canchas de distintos deportes y configuraciones de horario.

## Entidades principales

### SportsComplex
- id
- code
- name
- address
- latitude
- longitude
- amenities[]
- isActive
- createdAt
- updatedAt

### Court
- id
- complexId
- code
- name
- sportType
- capacityPerSide
- totalCapacity
- surfaceType
- isIndoor
- isActive
- createdAt
- updatedAt

### ComplexAdmin
- id
- complexId
- userId
- role
- isActive
- createdAt

### CourtSchedule
- id
- courtId
- dayOfWeek
- startTime
- endTime
- slotDurationMinutes
- isActive
- createdAt
- updatedAt

## Consideraciones
- Un complejo puede tener muchas canchas.
- Una cancha puede ser de cualquier deporte.
- Los horarios se configuran por cancha.
- El administrador general asigna uno o más administradores a un complejo.
- Las coordenadas del complejo servirán luego para mapas y búsqueda de complejos cercanos.
