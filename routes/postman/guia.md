# Guía de Endpoints para Postman

Base URL:
- http://localhost:8000/api

### 1) Endpoint de prueba
- GET `/api/test`
- Descripción: comprobación rápida de salud API.
- Response:
  - 200: `{ "status": "ok", "message": "API CoreAppMedia esta correcto" }`

### 2) Registro de usuario
- POST `/api/register`
- Middleware: `EnsureRegistrationKey`, `throttle:register`
- Body (JSON):
  - `name`: string
  - `email`: string
  - `password`: string
  - `password_confirmation`: string
  - `registration_key`: string (según tu config)

### 3) Login
- POST `/api/login`
- Middleware: `throttle:login`
- Body (JSON):
  - `email`: string
  - `password`: string
- Response esperado: token (Bearer / access_token según tu respuesta)

### 4) Recuperar contraseña
- POST `/api/forgot-password`
- Middleware: `throttle:password`
- Body (JSON):
  - `email`: string

### 5) Reset contraseña
- POST `/api/reset-password`
- Middleware: `throttle:password`
- Body (JSON):
  - `token`: string
  - `email`: string
  - `password`: string
  - `password_confirmation`: string

## 6) Endpoints con autenticación `auth:sanctum`
Requieren header:
- `Authorization: Bearer <token>`

### 6.1) Obtener usuario actual
- GET `/api/user`

### 6.2) Logout
- POST `/api/logout`

## 7) Endpoints superadmin (`CheckSuperAdmin`)
### 7.1) Actualizar usuario
- PUT `/api/users/{id}`
- Body (JSON): campos editables (ej. `name`, `email`)

### 7.2) Cambiar contraseña de usuario
- PUT `/api/users/{id}/password`
- Body (JSON):
  - `password`: string
  - `password_confirmation`: string

### 7.3) Cambiar estado de usuario
- PATCH `/api/users/{id}/status`
- Body (JSON):
  - `status`: int/bool (según implementación)

### 7.4) Eliminar usuario
- DELETE `/api/users/{id}`

## 🧪 Notas Postman
1. Asegura que `Content-Type: application/json` esté en Headers para POST/PUT/PATCH.
2. Usa variables de entorno:
   - `{{base_url}} = http://localhost:8000/api`
   - `{{token}}` para Authorization.
3. En Auth tab:
   - Type: Bearer Token
   - Token: `{{token}}`

## Flujo recomendado
1. `POST /api/register`
2. `POST /api/login` → guardar token.
3. `GET /api/user` para probar.
4. `POST /api/logout`.
5. (Opcional) superadmin: `/api/users/...`
