# Fondo de camaradería (MVP)

## Objetivo
Registrar el excedente de recaudación de cada partido y acumularlo en un fondo del grupo.

## Fórmula
excedente = totalRecaudado - costoRealPartido

## Reglas
1. Si el excedente es mayor a 0, se registra un movimiento `surplus_in`.
2. El saldo del fondo es la suma de ingresos menos egresos.
3. El fondo se usa para un evento de camaradería posterior.

## Endpoints
- `POST /matches/:id/pay`
- `POST /matches/:id/close`
- `GET /groups/:id/fund`
