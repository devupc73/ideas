# Persistencia de equipos en participations

## Decisión
Cada jugador conservará el resultado del sorteo dentro de su registro de participación.

## Campo
- team: 'A' | 'B' | null

## Beneficios
- historial por partido
- estadísticas futuras
- ranking por equipo
- trazabilidad del sorteo

## Regla
Luego de ejecutar el sorteo, cada jugador confirmado y pagado debe quedar con su campo `team` asignado.
