# Autenticación por teléfono (MVP)

## Objetivo
Permitir que un jugador ingrese con número de teléfono + código OTP.

## Flujo MVP
1. El usuario ingresa su teléfono.
2. El backend genera un código de 6 dígitos.
3. El código se registra temporalmente.
4. El usuario envía teléfono + código.
5. Si el código es válido y no expiró, el usuario queda autenticado.

## Endpoints
- `POST /auth/request-code`
- `POST /auth/verify-code`
- `GET /auth/health`

## Nota
Para el primer MVP, el envío por SMS puede quedar simulado en logs.
Después se integra Twilio, MessageBird o WhatsApp Cloud API.
