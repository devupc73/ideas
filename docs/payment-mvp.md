# Pagos digitales (MVP)

## Honestidad técnica
La integración de pago real depende del proveedor.

## Estrategia recomendada
1. Definir una interfaz de pagos agnóstica al proveedor.
2. Implementar un proveedor inicial.
3. Registrar estados de pago en backend.

## Opciones
- Stripe Checkout: más simple para arrancar con web.
- Yape/Plin: útiles en Perú, pero suelen requerir flujos y acuerdos específicos.

## Recomendación MVP
Arrancar con `paymentProvider = stripe` y dejar la API lista para cambiar proveedor luego.

## Estados de pago
- pending
- paid
- failed
- refunded

## Endpoints propuestos
- `POST /payments/create-session`
- `POST /payments/webhook`
- `POST /matches/:id/pay`
